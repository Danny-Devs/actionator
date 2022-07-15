<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { isDark, toggleDark } from '../composables/dark.ts'

const breakpoints = useBreakpoints(breakpointsTailwind)

const sm = breakpoints.smaller('sm')
</script>

<template>
  <mobileTopBar v-if="sm" />

  <!-- action  -->
  <actionItem />
  <!-- end action -->

  <mobileBottomBar v-if="sm" />
</template>

<style scoped>

</style>
