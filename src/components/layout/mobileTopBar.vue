<script setup>
const props = defineProps({
  selectedList: {
    type: String,
  },
})
</script>

<template>
  <div pt-4 pb-3 px-4 dark:bg-teal-900 bg-teal-500 flex items-center justify-between>
    <div text-xl dark:font-normal font-semibold dark:text-teal-300>
      [Actionator]
    </div>
    <div text-lg rounded-md px-4 py-1 bg-yellow-500 dark:bg-teal-600 shadow-md>
      {{ props.selectedList }}
    </div>
    <div>
      <DarkModeToggle />
    </div>
  </div>
</template>

<style scoped>

</style>
