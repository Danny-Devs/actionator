<script setup>
const props = defineProps({
  'selected-list': {
    type: String,
  },
})
</script>

<template>
  <div pt-4 pb-3 px-4 bg-teal-500 flex items-center justify-between>
    <div text-xl font-semibold>
      [Actionator]
    </div>
    <div text-lg rounded-md px-2 py-1 bg-yellow-500 shadow-md>
      {{ props.selectedList }}
    </div>
  </div>
</template>

<style scoped>

</style>
