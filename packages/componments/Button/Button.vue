<template>
    <button style="color:red;">
        <slot name="prefix">
        </slot>
        <slot>
        </slot>
    </button>
</template>
<script lang="ts" setup>

    defineOptions({
        name: 'OneButton'
    })
    // const slots = defineSlots<{
    //     prefix(props: { name: string }): any
    // }>()
    const slots = defineSlots({
    })
</script>