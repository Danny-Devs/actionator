<script setup>
import { isDark, toggleDark } from '../../composables/dark.ts'
</script>

<template>
  <div p-4>
    <div v-if="!isDark" text-2xl i-carbon-moon cursor-pointer @click="toggleDark()" />
    <div v-if="isDark" text-2xl i-carbon-sun cursor-pointer @click="toggleDark()" />
  </div>
</template>

<style scoped>

</style>
