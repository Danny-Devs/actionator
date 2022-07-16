<script setup>
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'
import { isDark, toggleDark } from '../composables/dark.ts'
import { useActionsStore } from '../stores/useActionsStore'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

const store = useActionsStore()
const selectedList = store.selectedList
</script>

<template>
  <mobileTopBar v-if="sm" :selected-list="selectedList" />

  <!-- action  -->

  <actionItem
    v-for="item in store.shortlist"
    :key="item.id"
    :description="item.description"
    :title="item.title"
    :starred="item.starred"
  />
  <!-- end action -->

  <mobileBottomBar v-if="sm" />
</template>

<style scoped>

</style>
