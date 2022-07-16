<script setup>
const openActionModal = () => {

}
</script>

<template>
  <div px-4 py-4 justify-between bg-teal-500 fixed bottom-0 w-full flex class="navbar">
    <div i-carbon-add-alt text-2xl @click="openActionModal" />
    <div i-carbon-star text-2xl />

    <div i-carbon-folders text-2xl />
    <div i-carbon-analytics text-2xl />
    <div i-carbon-settings text-2xl />
  </div>
</template>

<style scoped>

</style>
