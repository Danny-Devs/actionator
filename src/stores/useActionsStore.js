import { defineStore } from 'pinia'
import { uuid } from 'vue-uuid'

export const useActionsStore = defineStore('actions', {
  state: () => {
    return {
      selectedList: 'shortlist',
      shortlist: [
        {
          id: uuid.v4(),
          list: 'shortlist',
          title: 'Learn to use vue-draggable vue 3 version',
          description: 'This is a sample description',
          starred: false,
        },
        {
          id: uuid.v4(),
          list: 'shortlist',
          title: 'refactor resume',
          description: 'Another sample description',
          starred: false,
        },
      ],
    }
  },
})
