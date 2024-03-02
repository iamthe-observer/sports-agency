<script setup lang="ts">
// @ts-nocheck
import appStore from '~/stores/app';

const { data } = storeToRefs(appStore())
const news = computed(() => {
	return data.value ? data.value?.routes.home.news : 5
})

const { $gsap: gsap } = useNuxtApp()
const curr_news = ref<{ headline: string, src: string, content: string, date: string }>({
	headline: "",
	src: "",
	content: "",
	date: ""
})


onMounted(() => {
	const wrapper = document.querySelector<HTMLElement>(".wrapper");
	const boxes: HTMLElement[] = gsap.utils.toArray(".box");
	// gsap.set(boxes, {
	// 	backgroundColor: gsap.utils.wrap(colors)
	// });

	const activeElement = ref<HTMLElement>();
	const loop = horizontalLoop(boxes, {
		paused: true,
		draggable: true, // make it draggable
		center: true, // active element is the one in the center of the container rather than th left edge
		onChange: (element: HTMLElement, index: number) => { // when the active element changes, this function gets called.
			activeElement.value && activeElement.value.classList.remove("active");
			element.classList.add("active");
			activeElement.value = element;
		}
	});

	boxes.forEach((box, i) => box.addEventListener("click", () => loop.toIndex(i, { duration: .4, ease: "power4.inOut" })));

	document.querySelector(".toggle")?.addEventListener("click", () => wrapper?.classList.toggle("show-overflow"));
	document.querySelector(".next")?.addEventListener("click", () => {
		loop.next({ duration: 0.4, ease: "power4.inOut" })
	});
	document.querySelector(".prev")?.addEventListener("click", () => {
		loop.previous({ duration: 0.4, ease: "power4.inOut" })
	});

})

function horizontalLoop(items: any, config: any) {
	items = gsap.utils.toArray(items);
	config = config || {};
	let onChange = config.onChange,
		lastIndex = 0,
		tl = gsap.timeline({
			repeat: config.repeat, onUpdate: onChange && function () {
				let i = tl.closestIndex();
				if (lastIndex !== i) {
					lastIndex = i;
					onChange(items[i], i);
				}
			}, paused: config.paused, defaults: { ease: "none" }, onReverseComplete: () => tl.totalTime(tl.rawTime() + tl.duration() * 100)
		}),
		length = items.length,
		startX = items[0].offsetLeft,
		times = [],
		widths = [],
		spaceBefore = [],
		xPercents = [],
		curIndex = 0,
		indexIsDirty = false,
		center = config.center,
		pixelsPerSecond = (config.speed || 1) * 100,
		snap = config.snap === false ? v => v : gsap.utils.snap(config.snap || 1), // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
		timeOffset = 0,
		container = center === true ? items[0].parentNode : gsap.utils.toArray(center)[0] || items[0].parentNode,
		totalWidth,
		getTotalWidth = () => items[length - 1].offsetLeft + xPercents[length - 1] / 100 * widths[length - 1] - startX + spaceBefore[0] + items[length - 1].offsetWidth * gsap.getProperty(items[length - 1], "scaleX") + (parseFloat(config.paddingRight) || 0),
		populateWidths = () => {
			let b1 = container.getBoundingClientRect(), b2;
			items.forEach((el, i) => {
				widths[i] = parseFloat(gsap.getProperty(el, "width", "px"));
				xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px")) / widths[i] * 100 + gsap.getProperty(el, "xPercent"));
				b2 = el.getBoundingClientRect();
				spaceBefore[i] = b2.left - (i ? b1.right : b1.left);
				b1 = b2;
			});
			gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
				xPercent: i => xPercents[i]
			});
			totalWidth = getTotalWidth();
		},
		timeWrap,
		populateOffsets = () => {
			timeOffset = center ? tl.duration() * (container.offsetWidth / 2) / totalWidth : 0;
			center && times.forEach((t, i) => {
				times[i] = timeWrap(tl.labels["label" + i] + tl.duration() * widths[i] / 2 / totalWidth - timeOffset);
			});
		},
		getClosest = (values, value, wrap) => {
			let i = values.length,
				closest = 1e10,
				index = 0, d;
			while (i--) {
				d = Math.abs(values[i] - value);
				if (d > wrap / 2) {
					d = wrap - d;
				}
				if (d < closest) {
					closest = d;
					index = i;
				}
			}
			return index;
		},
		populateTimeline = () => {
			let i, item, curX, distanceToStart, distanceToLoop;
			tl.clear();
			for (i = 0; i < length; i++) {
				item = items[i];
				curX = xPercents[i] / 100 * widths[i];
				distanceToStart = item.offsetLeft + curX - startX + spaceBefore[0];
				distanceToLoop = distanceToStart + widths[i] * gsap.getProperty(item, "scaleX");
				tl.to(item, { xPercent: snap((curX - distanceToLoop) / widths[i] * 100), duration: distanceToLoop / pixelsPerSecond }, 0)
					.fromTo(item, { xPercent: snap((curX - distanceToLoop + totalWidth) / widths[i] * 100) }, { xPercent: xPercents[i], duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond, immediateRender: false }, distanceToLoop / pixelsPerSecond)
					.add("label" + i, distanceToStart / pixelsPerSecond);
				times[i] = distanceToStart / pixelsPerSecond;
			}
			timeWrap = gsap.utils.wrap(0, tl.duration());
		},
		refresh = (deep) => {
			let progress = tl.progress();
			tl.progress(0, true);
			populateWidths();
			deep && populateTimeline();
			populateOffsets();
			deep && tl.draggable ? tl.time(times[curIndex], true) : tl.progress(progress, true);
		},
		proxy;
	gsap.set(items, { x: 0 });
	populateWidths();
	populateTimeline();
	populateOffsets();
	window.addEventListener("resize", () => refresh(true));
	function toIndex(index, vars) {
		vars = vars || {};
		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
		let newIndex = gsap.utils.wrap(0, length, index),
			time = times[newIndex];
		if (time > tl.time() !== index > curIndex && index !== curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
			time += tl.duration() * (index > curIndex ? 1 : -1);
		}
		if (time < 0 || time > tl.duration()) {
			vars.modifiers = { time: timeWrap };
		}
		curIndex = newIndex;
		vars.overwrite = true;
		gsap.killTweensOf(proxy);
		return vars.duration === 0 ? tl.time(timeWrap(time)) : tl.tweenTo(time, vars);
	}
	tl.toIndex = (index, vars) => toIndex(index, vars);
	tl.closestIndex = setCurrent => {
		let index = getClosest(times, tl.time(), tl.duration());
		if (setCurrent) {
			curIndex = index;
			indexIsDirty = false;
		}
		return index;
	};
	tl.current = () => indexIsDirty ? tl.closestIndex(true) : curIndex;
	tl.next = vars => toIndex(tl.current() + 1, vars);
	tl.previous = vars => toIndex(tl.current() - 1, vars);
	tl.times = times;
	tl.progress(1, true).progress(0, true); // pre-render for performance
	if (config.reversed) {
		tl.vars.onReverseComplete();
		tl.reverse();
	}
	if (config.draggable && typeof (Draggable) === "function") {
		proxy = document.createElement("div")
		let wrap = gsap.utils.wrap(0, 1),
			ratio, startProgress, draggable, dragSnap, lastSnap, initChangeX, wasPlaying,
			align = () => tl.progress(wrap(startProgress + (draggable.startX - draggable.x) * ratio)),
			syncIndex = () => tl.closestIndex(true);
		typeof (InertiaPlugin) === "undefined" && console.warn("InertiaPlugin required for momentum-based scrolling and snapping. https://greensock.com/club");
		draggable = Draggable.create(proxy, {
			trigger: items[0].parentNode,
			type: "x",
			onPressInit() {
				let x = this.x;
				gsap.killTweensOf(tl);
				wasPlaying = !tl.paused();
				tl.pause();
				startProgress = tl.progress();
				refresh();
				ratio = 1 / totalWidth;
				initChangeX = (startProgress / -ratio) - x;
				gsap.set(proxy, { x: startProgress / -ratio });
			},
			onDrag: align,
			onThrowUpdate: align,
			overshootTolerance: 0,
			inertia: true,
			snap(value) {
				//note: if the user presses and releases in the middle of a throw, due to the sudden correction of proxy.x in the onPressInit(), the velocity could be very large, throwing off the snap. So sense that condition and adjust for it. We also need to set overshootTolerance to 0 to prevent the inertia from causing it to shoot past and come back
				if (Math.abs(startProgress / -ratio - this.x) < 10) {
					return lastSnap + initChangeX
				}
				let time = -(value * ratio) * tl.duration(),
					wrappedTime = timeWrap(time),
					snapTime = times[getClosest(times, wrappedTime, tl.duration())],
					dif = snapTime - wrappedTime;
				Math.abs(dif) > tl.duration() / 2 && (dif += dif < 0 ? tl.duration() : -tl.duration());
				lastSnap = (time + dif) / tl.duration() / -ratio;
				return lastSnap;
			},
			onRelease() {
				syncIndex();
				draggable.isThrowing && (indexIsDirty = true);
			},
			onThrowComplete: () => {
				syncIndex();
				wasPlaying && tl.play();
			}
		})[0];
		tl.draggable = draggable;
	}
	tl.closestIndex(true);
	lastIndex = curIndex;
	onChange && onChange(items[curIndex], curIndex);
	return tl;
}
</script>

<template>
	<div class="flex flex-col w-full items-center gap-20">

		<h1 class="w-full flex flex-col px-10 text-white">
			<span class="pb-1 text-[4vw] font-bold lg:text-lg">
				<span class="font-bold pr-2 text-golden-three">//</span>
				LATEST NEWS
			</span>
			<span class="text-[5vw] lg:text-4xl">Top insights and the</span>
			<span class="text-[5vw] lg:text-4xl">latest news from EagleEye</span>
		</h1>

		<div class="wrapper overflow-hidden">
			<div onclick="modal0.showModal()" v-for="(n, i) in news" :key="i" class="box lg:w-[40%] w-[80%]"
				@click="curr_news = n">
				<div class="w-[85%] h-full mx-auto flex flex-col text-white group">

					<div
						class="transition-all duration-150 ease-in-out group-hover:bg-golden-three h-[200px] w-full relative -translate-x-3 -translate-y-3 border border-golden-three">
						<div ref="target"
							class="w-full h-full absolute top-0 left-0 overflow-hidden translate-x-3 translate-y-3 border border-golden-three perspectiv">
							<img
								:src="n.src ? `https://dblmoqabperngqprlrjw.supabase.co/storage/v1/object/public/images/${n.src}` : 'https://live.staticflickr.com/65535/53534142101_68648c04e4_o.jpg'"
								alt="" class="object-cover w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out" />
						</div>
						<div
							class="absolute top-0 left-0 w-fit bg-golden-three translate-x-3 translate-y-3 shadow-lg text-black font-bold px-3 text-[3vw] lg:text-xl">
							{{ n.date ? n.date : "..." }}
						</div>
					</div>


					<p class="font-bold font-Outfit pt-6 h-full w-full lg:text-xl text-[3vw]">
						<span class="italic font-bold pr-1 text-golden-three lg:text-xl text-[3vw]">HEADLINE:</span>
						{{ n.headline ? n.headline : "..." }}
					</p>
				</div>
			</div>

			<!-- content modal -->
			<!-- <button class="btn" >open modal</button> -->
			<dialog id="modal0" class="modal">
				<div
					class="modal-box bg-black rounded-none border border-golden-three relative text-white w-[95%] h-[80%] lg:w-[50%] lg:min-h-[80%] max-w-full">
					<form method="dialog">
						<button class="fixed right-2 top-2 text-golden-three">✕</button>
					</form>
					<h3 class="font-semibold lg:text-4xl text-3xl w-[80%] flex gap-2">
						<span class="text-golden-three font-semibold">//</span>
						{{ curr_news.headline ? curr_news.headline : "..." }}
					</h3>

					<div class="flex gap-4 lg:flex-row flex-col">
						<p class=" flex-1 py-4 lg:px-6 px-2 text-justify lg:text-lg font-Outfit">
							{{ curr_news.content ? curr_news.content : "..." }}
						</p>
						<p class="flex-1 text-justify flex flex-col text-lg font-Outfit">
							<img
								:src="curr_news.src ? curr_news.src : 'https://live.staticflickr.com/65535/53534142101_68648c04e4_o.jpg'"
								alt="newsPic" class="object-cover w-full h-[400px] border border-golden-three">
							<span class="italic self-end to-golden-three">
								{{ curr_news.date }}
							</span>
						</p>
					</div>

				</div>

				<form method="dialog" class="modal-backdrop">
					<button>close</button>
				</form>
			</dialog>
		</div>

		<div class="relative flex gap-5 w-full justify-center items-center">
			<button
				class="prev border hover:bg-golden-three hover:text-black transition-all duration-150 ease-in-out border-golden-three bg-black lg:text-xl text-[2vw]">prev</button>

			<!-- <button
				class="text-white font-bold text-xl border border-golden-three bg-black hover:bg-golden-three hover:text-black transition-all duration-150 ease-in-out">View
				All</button> -->

			<button
				class="next border hover:bg-golden-three hover:text-black transition-all duration-150 ease-in-out border-golden-three bg-black lg:text-xl text-[2vw]">next</button>
			<!-- <button class="toggle">toggle overflow</button> -->
		</div>
	</div>
</template>

<style scoped>
.wrapper {
	height: 100%;
	width: 100%;
	/* background: #555; */
	position: relative;
	display: flex;
	align-items: center;
	/* justify-content: space-evenly; */
	overflow: hidden;
}

.carousel {
	/* background: blue; */
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

.box {
	box-sizing: border-box;
	height: 100%;
	/* width: 80%; */
	margin: 0;
	padding-top: 20px;
	position: relative;
	flex-shrink: 0;
	font-size: 21px;
	cursor: pointer;
}

.box.active {
	/* color: white; */
	/* outline: 2px solid white; */
}

.prev {
	/* position: absolute;
	top: 10%;
	left: 15%; */
}

.next {
	/* position: absolute;
	top: 10%;
	right: 15%; */
}

button {
	padding: 1rem 2rem 1rem 2rem;
	color: white;
	text-transform: uppercase;
	font-weight: bold;
	cursor: pointer;
}

.show-overflow {
	overflow: visible;
}
</style>