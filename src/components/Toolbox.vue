<template>
  <div>
    <button @click="$emit('add-label')">Add Label</button>
    <button @click="$emit('add-button')">Add Button </button>
    <button @click="$emit('add-input')">Add Input</button>
  </div>
</template>

<script>
export default {
  name: "Toolbox",
  props:[],
  components: {}
};
</script>

<style  scoped>
button {
  background-color: #4CAF50;
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border : 2px solid gray;
}
</style>