<script setup>
import { isDark, toggleDark } from '../../composables/dark.ts'
</script>

<template>
  <div>
    <div v-if="!isDark" text-xl sm:text-lg i-carbon-moon cursor-pointer @click="toggleDark()" />
    <div v-if="isDark" text-xl sm:text-lg i-carbon-sun cursor-pointer @click="toggleDark()" />
  </div>
</template>

<style scoped>

</style>
