<script>
import draggable from 'vuedraggable'

const list1 = ref([{ name: 'Drag Me!' }])
const list2 = ref([{ name: 'Drag Me Too!' }])
</script>

<template>
  <main>
    <div class="mt-5 container">
      <div class="row justify-content-center border py-5">
        <div class="col-5">
          <h4 class="mb-3">
            Draggable 1
          </h4>
          <draggable class="draggable-list" v-model="list1" group="my-group">
            <div v-for="element in list1" :key="element.name" class="list-item">
              {{ element.name }}
            </div>
          </draggable>
        </div>

        <div class="col-5">
          <h4 class="mb-3">
            Draggable 2
          </h4>
          <draggable class="draggable-list" :list="list2" group="my-group">
            <div v-for="element in list2" :key="element.name" class="list-item">
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.draggable-list {
  background: #3f51b5;
  color: #fff;
  border: 1px solid;
  height: 50vh;
}
.list-item {
  margin: 10px;
  padding: 40px;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  background: #f44336;
  display: inline-block;
}
</style>
