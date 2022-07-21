import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'

export const useActionsStore = defineStore('actions', {
  state: () => {
    return {
      selectedList: 'selected list',
      actions: useLocalStorage('my-actions', []),
    }
  },
  getters: {
    actionsEmpty() {
      return this.actions.length <= 0
    },
  },
  actions: {
    addAction(action) {
      this.actions.push(action)
    },
  },
})
