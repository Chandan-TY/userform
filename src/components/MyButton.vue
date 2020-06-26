<template>
    <button :style="control.style">{{control.name}}</button>
</template>

<script>
export default {
  name: "MyButton",
  props: ["control"],
  created() {
    if (this.control.name === "button") {
      console.log("Hello");
    }
  }
};
</script>

<style scoped>
</style>