<template>
  <button :style="control.style">{{control.name}}</button>
</template>

<script>
export default {
  name: "MyButton",
  props: ["control"],
  created() {}
};
</script>

<style scoped>
</style>