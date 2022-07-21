<script setup>
import { breakpointsTailwind, useBreakpoints, useLocalStorage } from '@vueuse/core'
import { isDark, toggleDark } from '../composables/dark.ts'
import { useActionsStore } from '../stores/useActionsStore'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

const store = useActionsStore()
</script>

<template>
  <MobileTopBar :selected-list="store.selectedList" />

  <!-- actions  -->
  <div>
    <actionItem
      v-for="item in store.actions"
      :key="item.id"
      :description="item.description"
      :title="item.title"
      :starred="item.starred"
    />
  </div>
  <!-- end actions -->

  <MobileBottomBar v-if="sm" />
</template>

<style scoped>

</style>
