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
    border-b-1
    border-t-1
    flex
    items-center
    justify-between
    py-4
    @dblclick="focusAction"
  >
    <div flex items-center>
      <div i-carbon-draggable text-xl ml-2 />
      <p text ml-2>
        {{ title }}
      </p>
    </div>
    <div flex mr-3>
      <!-- stars will rise to the top. stars are multi-clickable/multi-colored -->
      <div i-carbon-star text-lg mr-3 />
      <div i-carbon-navaid-military text-lg mr-3 />
    </div>
  </div>
</template>

<style scoped>

</style>
