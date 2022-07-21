<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  starred: {
    type: Boolean,
    default: false,
  },
})

const focusAction = () => {
  console.log('Action focused')
}
</script>

<template>
  <!-- to dos: implement drag n drop -->
  <!-- to dos: implement stars to top of list -->
  <!-- implement trashing of action (with confirm) -->
  <!-- implement click on input to edit -->
  <!--  -->

  <!-- double clicking will bring action into focus -->
  <div
    ref="doubleTapEl"
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
    @dblclick="focusAction"
  >
    <div i-carbon-star />

    <p ml-2 class="w-4/5">
      {{ title }}
    </p>

    <!-- stars will rise to the top. stars are multi-clickable/multi-colored -->
    <div i-carbon-navaid-military />
  </div>
</template>

<style scoped>

</style>
