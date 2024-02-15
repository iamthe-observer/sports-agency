<template>
	<primitive :object="model" />
</template>

<script setup lang="ts">
const { scene: model } = await useGLTF('/DMS2.glb')
console.log(model);
let x = 0

const { onLoop } = useRenderLoop()
onLoop(({ elapsed }) => {

})
</script>

<style scoped></style>