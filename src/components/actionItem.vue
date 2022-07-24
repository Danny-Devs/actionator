<script setup>
import rocketJSON from '../../public/rocket.json'
import confettiJSON from '../../public/confetti.json'
import { useActionsStore } from '~/stores/useActionsStore'

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  tagsList: {
    type: Array,
    default: () => [],
  },
  id: {
    type: String,
    required: true,
  },
  starred: {
    type: Boolean,
    default: false,
  },
},
)

// global store
const store = useActionsStore()

// refs
const actionMenu = ref(null)
const editInput = ref(null)

// v-modeled input value to update pinia with
const editTitle = ref('')

// bool flags for state management
const isActionMenuOpen = ref(false)
const showConfirmDeleteModal = ref(false)
const inEditMode = ref(false)
const inFocusMode = ref(false)
const isFocusing = ref(false)
const isCompleted = ref(false)

onMounted(() => {
  editTitle.value = props.title
})

const saveEditedTitle = () => {
  store.actions.find(action => action.id === props.id).title = editTitle.value
  inEditMode.value = false
}

const openActionMenu = () => {
  isActionMenuOpen.value = true
}
const closeActionMenu = () => {
  isActionMenuOpen.value = false
}

onClickOutside(actionMenu, () => {
  isActionMenuOpen.value = false
})

onClickOutside(editInput, () => {
  inEditMode.value = false
  store.editAction(props.id, editTitle.value)
})

const editAction = () => {
  closeActionMenu()
  inEditMode.value = true
}

const confirmDeleteAction = () => {
  showConfirmDeleteModal.value = true
  isActionMenuOpen.value = false
}
const closeConfirmDeleteModal = () => {
  showConfirmDeleteModal.value = false
}

const deleteAction = () => {
  store.actions = store.actions.filter(action => action.id !== props.id)
  closeConfirmDeleteModal()
}

const enterFocusMode = () => {
  inFocusMode.value = true
}

const closeFocusMode = () => {
  inFocusMode.value = false
}

const getFocused = () => {
  isFocusing.value = true
}

const pause = () => {
  isFocusing.value = false
}

const completeAction = () => {
  inFocusMode.value = false
  isFocusing.value = false
  isCompleted.value = true
  setTimeout(() => store.removeAction(props.id), 1000)
}
</script>

<template>
  <!-- to dos: implement drag n drop -->
  <!-- to dos: implement stars to top of list -->
  <!-- implement trashing of action (with confirm) -->
  <!-- implement click on input to edit -->
  <!--  -->
  <main>
    <!-- double clicking will bring action into focus -->
    <div v-if="isCompleted">
      <div class="w-1/2" mx-auto mt-12 mb-6>
        <Vue3Lottie :animation-data="confettiJSON" />
      </div>
    </div>
    <div
      v-if="!isCompleted"
      shadow-md
      flex
      items-center
      justify-between
      py-3
      px-4
      dark:bg-teal-900
      bg-teal-100
      mx-4
      my-3
      rounded-lg
    >
      <div v-if="starred" i-carbon-star-filled mr-2 />
      <div v-if="!starred" i-carbon-star mr-2 />

      <!-- title section -->
      <div v-if="!inEditMode" ml-2 class="w-4/5">
        <p>
          {{ title }}
        </p>
      </div>

      <div v-if="inEditMode" class="w-5/6" mx-2>
        <input ref="editInput" v-model="editTitle" py-2 px-2 w-full autofocus type="text" @keypress.enter="saveEditedTitle">
      </div>

      <!-- end title section -->

      <!-- stars will rise to the top. stars are multi-clickable/multi-colored -->
      <div v-if="!inEditMode" i-carbon-navaid-military mr-2 @click="enterFocusMode" />

      <!-- focus mode - full screen -->
      <main v-if="inFocusMode" absolute bottom-0 left-0 right-0 top-0 bg-black z-10>
        <section container mx-auto p-4 text-teal-300>
          <div flex items-center @click="closeFocusMode">
            <div i-carbon-chevron-left text-lg />
            <p text-sm>
              back
            </p>
          </div>

          <p text-center text-3xl mt-20>
            {{ title }}
          </p>
          <div text-center mt-12>
            <button
              v-if="!isFocusing"
              class="w-5/6"
              border-2
              border-teal-500
              px-6
              py-3
              rounded-lg
              text-teal-300
              text-xl
              @click="getFocused"
            >
              start/resume
            </button>
            <button
              v-if="isFocusing"
              class="w-5/6"
              border-2
              border-teal-500
              px-6
              py-3
              rounded-lg
              text-teal-500
              text-xl
              @click="pause"
            >
              pause/stop
            </button>

            <div v-if="isFocusing">
              <div class="w-1/2" mx-auto mt-12 mb-6>
                <Vue3Lottie :animation-data="rocketJSON" />
              </div>
            </div>
          </div>
        </section>
        <section text-center>
          <button
            absolute
            class="w-5/6 bottom-12 left-1/2 transform -translate-x-1/2 -translate-y-1/2"

            border-2
            border-teal-500
            px-6
            py-3
            rounded-lg
            text-teal-300
            text-xl
            @click="completeAction"
          >
            completed
          </button>
        </section>
      </main>
      <!-- end focus mode -->

      <!-- open action menu -->
      <div i-carbon-overflow-menu-vertical @click="openActionMenu" />

      <!-- action menu -->
      <div v-if="isActionMenuOpen" ref="actionMenu" absolute right-10 bg-teal-100 shadow-lg z-10 px-4 py-4 rounded-lg>
        <div flex items-center hover:text-teal-500>
          <div i-carbon-edit />
          <p p-2 @click="editAction">
            Edit
          </p>
        </div>
        <div flex items-center hover:text-teal-500>
          <div i-carbon-trash-can />
          <p p-2 @click="confirmDeleteAction">
            Delete
          </p>
        </div>
      </div>

      <!-- confirm delete modal -->
      <div v-if="showConfirmDeleteModal">
        <div fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full />
        <div class="z-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-teal-500 py-2 w-4/5">
          <div bg-teal-50 p-6>
            <div text-center mb-4 mt-1>
              Are you sure?
            </div>
            <div flex gap-6 justify-center>
              <button shadow-md bg-teal-50 hover:text-white transition hover:bg-teal-500 border-teal-500 border-2 px-8 pt-4 pb-1 rounded-lg @click="closeConfirmDeleteModal">
                cancel
              </button>
              <button action:shadow-none shadow-md bg-teal-50 border-red-500 border-2 px-8 pt-4 pb-1 rounded-lg hover:text-white hover:bg-red-500 @click="deleteAction">
                delete
              </button>
            </div>
          </div>
        </div>
      </div>
    <!-- end confirm delete modal -->
    </div>
  </main>
</template>

<style scoped>

</style>
