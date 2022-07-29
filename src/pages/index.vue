<script setup>
import { breakpointsTailwind, useBreakpoints, useLocalStorage } from '@vueuse/core'
import { VueDraggableNext } from 'vue-draggable-next'
import { uuid } from 'vue-uuid'
import { isDark, toggleDark } from '../composables/dark.ts'
import { useActionsStore } from '../stores/useActionsStore'
const breakpoints = useBreakpoints(breakpointsTailwind)
const sm = breakpoints.smaller('sm')

const store = useActionsStore()

// initialize snapshot of actionList (for undo/redo)
store.actionListSnapshot = store.actions

const openAddActionModal = () => {
  store.isAddActionModalOpen = true
  console.log(store.isAddActionModalOpen)
}
</script>

<template>
  <MobileTopBar :selected-list="store.selectedList" />

  <!-- display if there are no actions in the list -->
  <div v-if="store.actionsEmpty" flex justify-center items-center text-center pt-8 hover:cursor-pointer @click="openAddActionModal">
    <div i-carbon-add-alt mr-2 /><div>
      add an action
    </div>
  </div>

  <!-- actions  -->
  <div sm:px-12 md:px-24 lg:px-36 xl:px-48 mx-auto>
    <VueDraggableNext
      :list="store.actions"
    >
      <actionItem
        v-for="action in store.actions"
        :id="action.id"
        :key="action.id"
        :description="action.description"
        :starred="action.starred"
        :tags-list="action.tagsList"
        :title="action.title"
      />
    </VueDraggableNext>
  </div>
  <!-- end actions -->

  <MobileBottomBar />
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
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
