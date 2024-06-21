<template>
    <button style="color:red;">{{ btnText }}</button>
</template>
<script lang="ts" setup>
    import { ref } from 'vue';

    defineOptions({
        name: 'OneButton'
    })
    const btnText = ref('按钮')
</script>