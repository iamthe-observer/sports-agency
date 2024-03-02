<template>
    <h3 class="text-xl mb-2">{{ head ? head : 'Total' }}: [{{ items!.length }}]</h3>
    <ul class="flex flex-col divide-4" v-for="(item, i) in items" :key="i">
        <slot name="item" :item="item" :idx="i" :moveUp="moveUp" :moveDown="moveDown" />
    </ul>
</template>

<script setup lang="ts" generic="T">
const props = defineProps<{
    items: T[] | undefined
    head?: string
    item: T
}>()

function moveUp(idx: number) {
    const temp = props.items![idx];
    props.items![idx] = props.items![idx - 1];
    props.items![idx - 1] = temp;
}

function moveDown(idx: number) {
    const temp = props.items![idx];
    props.items![idx] = props.items![idx + 1];
    props.items![idx + 1] = temp;
}

</script>