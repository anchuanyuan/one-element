<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <one-button>
    测试
    <template #prefix>
      <span>icon</span>
    </template>
  </one-button>
  <RouterView />
</template>

<style scoped>

</style>
