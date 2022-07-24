<script setup>
import { breakpointsTailwind, useBreakpoints, useLocalStorage } from '@vueuse/core'
import draggable from 'vuedraggable'
import { isDark, toggleDark } from '../composables/dark.ts'
import { useActionsStore } from '../stores/useActionsStore'
import waverJSON from '../../public/waver.json'

const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

const store = useActionsStore()

console.log(store.actions)
</script>

<template>
  <MobileTopBar :selected-list="store.selectedList" />

  <!-- actions  -->
  <div>
    <draggable
      tag="ul"
      :list="store.actions"
      class="list-group"
      handle=".handle"
      item-key="name"
    >
      <template #item="{ element }">
        <ul>
          <actionItem :id="element.id" class="handle" :title="element.title" :starred="element.starred" :description="element.description" :tags-list="element.tagsList" />
        </ul>
      </template>
    </draggable>

    <!-- legacy code -->
    <!-- <actionItem
      v-for="item in store.actions"
      :id="item.id"
      :key="item.id"
      :description="item.description"
      :title="item.title"
      :starred="item.starred"
    /> -->
  </div>
  <!-- end actions -->

  <MobileBottomBar v-if="sm" />
</template>

<style scoped>
.actions-enter-active,
.actions-leave-active {
  transition: all 0.5s ease;
}
.actions-enter-from,
.actions-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

