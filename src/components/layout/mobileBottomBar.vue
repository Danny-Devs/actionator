<script setup>
import { uuid } from 'vue-uuid'
import { useActionsStore } from '../../stores/useActionsStore'

const isModalOpen = ref(false)
// value of title input element
const titleText = ref('')
const descText = ref('')
const tagsList = ref([])

const store = useActionsStore()

const actionList = ref([
  {
    id: 0,
    title: 'A title',
    description: 'a description',
    starred: false,
  },
])

const openActionModal = () => {
  isModalOpen.value = true
}
const closeActionModal = () => {
  isModalOpen.value = false
}

const addAction = () => {
  // add action to actionList
  store.actions.push({
    id: uuid.v4(),
    title: titleText.value,
    description: descText.value,
    tagsList: tagsList.value,
  })
  closeActionModal()
  titleText.value = ''
  descText.value = ''
  tagsList.value = []
}

const activateTag = (tagName, event) => {
  if (tagsList.value.includes(tagName)) {
    tagsList.value = tagsList.value.filter(tag => tag !== tagName)
    event.target.style.backgroundColor = '#5eead4'
  }
  else {
    event.target.style.backgroundColor = 'cyan'
    tagsList.value.push(tagName)
  }
  console.log('event: ', event)
}
</script>

<template>
  <div px-4 py-4 justify-between dark:bg-teal-800 bg-teal-500 fixed bottom-0 w-full flex>
    <div dark:text-teal-300 i-carbon-add-alt text-2xl @click="openActionModal" />
    <div dark:text-teal-300 i-carbon-star text-2xl />

    <div dark:text-teal-300 i-carbon-folders text-2xl />
    <div dark:text-teal-300 i-carbon-analytics text-2xl />
    <div dark:text-teal-300 i-carbon-settings text-2xl />
  </div>

  <!-- Modal -->
  <div v-if="isModalOpen" class="grid ">
    <div p-4 bg-teal-500 class="absolute top-0 bottom-0 left-0 right-0">
      <form @submit.prevent="addAction">
        <div i-carbon-close text-lg mr-1 @click="closeActionModal" />
        <p text-3xl py-2 text-center>
          action
        </p>
        <input v-model="titleText" shadow-lg autofocus rounded-lg type="text" px-4 py-3 w-full text-lg>

        <div>
          <p text-3xl pt-6 pb-3 text-center>
            description
          </p>
          <input v-model="descText" shadow-lg rounded-lg type="text" px-4 py-3 w-full text-lg>
        </div>

        <div text-xl pt-6>
          <div mx-auto text-3xl pb-3 text-center flex justify-center items-center>
            <p>
              tags
            </p>
            <div text-base i-carbon-add /><div text-base>
              add tag
            </div>
          </div>

          <div grid grid-cols-2 gap-y-2 gap-x-2>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('work', $event)">
              work
            </p>

            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('vue', $event)">
              vue
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('household', $event)">
              household
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('health', $event)">
              health
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('church', $event)">
              church
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('bopping', $event)">
              bopping
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('travel', $event)">
              travel
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="activateTag('to file', $event)">
              to file
            </p>
          </div>
        </div>

        <div my-6 flex justify-center>
          <button class="action:shadow-none action:scale-110" shadow-md flex justify-center items-center bg-amber-400 w-full py-4 rounded-md type="submit">
            <div i-carbon-checkmark text-lg mr-1 />
            <p text-lg>
              Add action
            </p>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>

</style>
