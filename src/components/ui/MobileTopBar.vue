<script setup>
const props = defineProps({
  selectedList: {
    type: String,
  },
})
</script>

<template>
  <div pt-3 sm:pt-2 sm:pb-1 pb-2 px-4 dark:bg-teal-900 bg-teal-500 flex items-center justify-between>
    <div text-xl sm:text-lg dark:font-normal font-semibold dark:text-teal-300>
      [Actionator]
    </div>
    <!-- <div rounded-md px-4 py-1 bg-yellow-500 dark:bg-teal-600 shadow-md>
      {{ props.selectedList }}
    </div> -->

    <div>
      <DarkModeToggle />
    </div>
  </div>
</template>

<style scoped>

</style>
