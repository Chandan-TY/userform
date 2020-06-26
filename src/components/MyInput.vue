<template>
  <input v-model="control.name" :style="control.style" />
</template>

<script>
export default {
  name: "MyInput",
  props: ["control"]
};
</script>

<style scoped>
</style>