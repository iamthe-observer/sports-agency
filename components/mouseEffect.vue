<template>
	<Teleport to="body">
		<div class="mouse-container">
			<div ref="cursor_dot"
				class="cursor_dot w-[10px] aspect-square fixed bg-golden-three rounded-full z-[10000] -translate-y-1/2 -translate-x-1/2 user-select-none pointer-events-none cursor-dot">
			</div>
			<div ref="cursor_follow"
				class="cursor_follow w-[30px] aspect-square fixed -translate-y-1/2 -translate-x-1/2 user-select-none pointer-events-none ring-1 ring-golden-three rounded-full z-[1000] blur- backdrop-blur-sm">
			</div>
		</div>
	</Teleport>
</template>

<script setup lang="ts">
const { $gsap: gsap, $Flip: Flip } = useNuxtApp();
const cursor_follow = ref<HTMLElement>()
const cursor_dot = ref<HTMLElement>()

onMounted(() => {
	// animate cursor on move
	function animateCursorFollow(e: any) {
		gsap.to(cursor_follow.value!, {
			x: e.clientX,
			y: e.clientY,
			duration: 1,
			ease: 'power4.out'
		})
	}
	function animateCursorDot(e: any) {
		gsap.to(cursor_dot.value!, {
			x: e.clientX,
			y: e.clientY,
			duration: 0,
		})
	}
	document.addEventListener('mousemove', animateCursorFollow)
	document.addEventListener('mousemove', animateCursorDot)

	// animate cursor on hover
	const cover_container = document.querySelectorAll('.cover-container')
	cover_container.forEach((container) => {
		container.addEventListener('mouseenter', () => {
			gsap.to(cursor_dot.value!, {
				scale: 2,
				duration: .2,
				ease: 'bounce.inOut',
				boxShadow: '0 0 8px 5px rgba(0, 0, 0, 0.5)'
				// boxShadow: '0 0 8px 5px rgba(229, 184, 11, 0.5)'
			})
		})
		container.addEventListener('mouseleave', () => {
			gsap.to(cursor_dot.value!, {
				scale: 1,
				duration: .2,
				ease: 'bounce.inOut',
				boxShadow: '0 0 8px 5px rgba(0, 0, 0, 0.5)'
			})
		})
	})
})
</script>

<style scoped>
.cursor_dot {
	box-shadow: 0 0 8px 5px rgba(0, 0, 0, 0.5);
}
</style>