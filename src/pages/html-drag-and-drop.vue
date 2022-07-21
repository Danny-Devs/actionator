<script setup>
const items = ref([
  {
    id: 0,
    title: 'Item A',
    list: 1,
  },
  {
    id: 1,
    title: 'Item B',
    list: 1,
  },
  {
    id: 2,
    title: 'Item C',
    list: 2,
  },
])

const listOne = computed(() => {
  return items.value.filter(item => item.list === 1)
})
const listTwo = computed(() => {
  return items.value.filter(item => item.list === 2)
})

const startDrag = (evt, item) => {
  evt.dataTransfer.dropEffect = 'move'
  evt.dataTransfer.effectAllowed = 'move'
  evt.dataTransfer.setData('itemID', item.id)
}

const onDrop = (evt, list) => {
  const itemID = evt.dataTransfer.getData('itemID')
  const item = items.value.find(item => item.id === itemID)
  item.list = list
}
</script>

<template>
  <h1>HTML Drag and Drop</h1>
  <div>
    <div
      class="drop-zone" @drop="onDrop($event, 1)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        v-for="item in listOne"
        :key="item.title"
        class="drag-el"
        draggable
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
    <div
      class="drop-zone" @drop="onDrop($event, 2)"
      @dragover.prevent
      @dragenter.prevent
    >
      <div
        v-for="item in listTwo"
        :key="item.title"
        class="drag-el"
        draggable
        @dragstart="startDrag($event, item)"
      >
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.drop-zone {
  background-color: #eee;
  margin-bottom: 10px;
  padding: 10px;
}

.drag-el {
  background-color: #fff;
  margin-bottom: 10px;
  padding: 5px;
}
</style>

