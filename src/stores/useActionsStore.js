import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { uuid } from 'vue-uuid'

export const useActionsStore = defineStore('actions', {
  state: () => {
    return {
      selectedList: 'selected list',
      actions: [
        {
          id: uuid.v4(),
          starred: true,
          title: 'implement draggable feature implement draggable feature implement draggable feature',
          description: 'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
          tagsList: [
            '#tag1',
            '#tag2',
            '#tag3',
          ],
        },
        {
          id: uuid.v4(),
          starred: false,
          title: 'action title #2',
          description: 'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro ',
          tagsList: [
            '#tag1',
            '#tag2',
            '#tag3',
          ],
        },
      ],
    }
  },
  getters: {
    actionsEmpty() {
      return this.actions.length <= 0
    },
    totalNumActions() {
      return this.actions.length
    },
  },
  actions: {
    addAction(action) {
      this.actions.push(action)
    },
    removeAction(id) {
      this.actions = this.actions.filter(action => action.id !== id)
    },
    editAction(id, newTitle) {
      const myAction = this.actions.find(el => el.id === id)
      myAction.title = newTitle
    },
  },
})
