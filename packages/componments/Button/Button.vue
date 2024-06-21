<template>
    <button style="color:red;">
        <slot>
        </slot>
    </button>
</template>
<script lang="ts" setup>

    defineOptions({
        name: 'OneButton'
    })
</script>