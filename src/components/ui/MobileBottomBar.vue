<script setup>
import { uuid } from 'vue-uuid'
import { useActionsStore } from '../../stores/useActionsStore'

const store = useActionsStore()

const filterByStar = () => {
  // if list is not filtered, then filter by starred

  if (!store.isListFiltered) {
    store.actions.forEach((action) => {
      if (action.starred) {
        if (store.actions.indexOf(action) !== 0) {
          store.actions.splice(store.actions.indexOf(action), 1)
          store.actions.unshift(action)
        }
      }
    })
  }
  // if the list is filtered, then restore to previous state
  if (store.isListFiltered)
    store.actions = store.actionsSnapshot

  // toggle filter flag
  store.isListFiltered = !store.isListFiltered
}
</script>

<template>
  <div px-4 py-4 justify-between dark:bg-teal-800 bg-teal-500 fixed bottom-0 w-full flex>
    <div dark:text-teal-300 i-carbon-add-alt text-2xl class="dark:hover:text-teal-400" hover:cursor-pointer hover:text-slate-700 @click="store.openAddActionModal" />
    <!-- if starred items automatically rise, no need for the menu item below -->
    <!-- <div v-if="!store.isListFiltered" dark:text-teal-300 i-carbon-star text-2xl class="dark:hover:text-teal-400" hover:cursor-pointer @click="filterByStar" /> -->
    <div v-if="store.isListFiltered" dark:text-teal-300 i-carbon-star-filled text-2xl class="dark:hover:text-teal-400" hover:cursor-pointer @click="filterByStar" />

    <div dark:text-teal-300 i-carbon-folders text-2xl class="dark:hover:text-teal-400" hover:cursor-pointer hover:text-slate-700 />
    <div dark:text-teal-300 i-carbon-analytics text-2xl hover:cursor-pointer class="dark:hover:text-teal-400" hover:text-slate-700 />
    <div dark:text-teal-300 i-carbon-settings text-2xl hover:cursor-pointer class="dark:hover:text-teal-400" hover:text-slate-700 />
  </div>

  <!-- Modal -->

  <AddActionModal />
</template>

<style scoped>

</style>
