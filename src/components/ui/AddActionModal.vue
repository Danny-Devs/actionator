<script setup>
import { uuid } from 'vue-uuid'
import { useActionsStore } from '../../stores/useActionsStore'

const store = useActionsStore()

// value of title input element
const titleText = ref('')
const descText = ref('')
const tagsList = ref([])

const handleForm = () => {
  // add action to actionList
  store.addAction({
    id: uuid.v4(),
    title: titleText.value,
    description: descText.value,
    tagsList: tagsList.value,
  })
  store.closeAddActionModal()
  titleText.value = ''
  descText.value = ''
  tagsList.value = []
}

const handleTagClick = (tagName, event) => {
  // change tag color to activated state or vice versa
  if (tagsList.value.includes(tagName)) {
    tagsList.value = tagsList.value.filter(tag => tag !== tagName)
    event.target.style.backgroundColor = '#5eead4'
    tagsList.splice(tagsList.indexOf(tagName), 1)
  }
  else {
    event.target.style.backgroundColor = '#a3e635'
    tagsList.value.push(tagName)
  }
}

const handleAddTag = () => {
  // open up an add tag modal
  // when user submits, add tag to tagsList
  // when user cancels, close tag modal and do nothing
}
</script>

<template>
  <!-- listens to global flag "isAddActioModalOpen" -->
  <div v-if="store.isAddActionModalOpen">
    <div p-4 bg-teal-500 class="absolute top-0 bottom-0 left-0 right-0">
      <!-- form starts here -->
      <form class="sm:w-4/5 lg:w-1/2" mx-auto @submit.prevent="handleForm">
        <!-- close icon -->
        <div flex items-center>
          <div i-carbon-chevron-left sm:text-base mr-1 @click="closeActionModal" />
          <div>back</div>
        </div>

        <!-- action input -->
        <p sm:text-xl text-2xl mt-5 mb-1>
          action
        </p>
        <input v-model="titleText" shadow-lg autofocus rounded-lg type="text" px-4 sm:py-2 py-3 w-full text-lg>

        <!-- description input -->
        <div>
          <p sm:text-xl text-2xl mt-6 mb-1>
            description
          </p>
          <input v-model="descText" shadow-lg rounded-lg type="text" px-4 py-3 sm:py-2 w-full text-lg>
        </div>

        <!-- tags -->
        <div text-xl pt-6>
          <div mx-auto text-2xl sm:text-xl mb-2 flex justify-between items-center>
            <p>
              tags
            </p>
            <div flex items-center @click="handleAddTag">
              <div text-base i-carbon-add sm:text-sm /><div text-base>
                <div>add tag</div>
              </div>
            </div>
          </div>

          <div grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-2 sm:text-base>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('work', $event)">
              work
            </p>

            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('vue', $event)">
              vue
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('household', $event)">
              household
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('health', $event)">
              health
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('church', $event)">
              church
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('travel', $event)">
              travel
            </p>
            <p rounded-lg text-center py-2 bg-teal-300 @click="handleTagClick('to file', $event)">
              to file
            </p>
          </div>
        </div>

        <div my-6 flex justify-center>
          <button class="action:shadow-none action:scale-110" shadow-md flex justify-center items-center bg-amber-400 w-full py-4 sm:py-3 rounded-md type="submit">
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
