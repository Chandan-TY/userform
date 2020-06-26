<template>
  <div>
    <div :style="modal.style">
      <div :style="modal.innerStyle">
        <div v-for="control in modal.controls" :key="control.id">
          <MyButton v-if="control.type==='button'" :control="control"></MyButton>
          <MyInput v-else-if="control.type==='input'" :control="control" />
          <MyLabel v-else-if="control.type==='label'" :control="control" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MyButton from "./MyButton.vue";
import MyInput from "./MyInput.vue";
import MyLabel from "./MyLabel.vue";

// import DynamicComponent from "./DynamicComponent.vue";

export default {
  name: "Modals",
  props: ["modal"],
  data() {
    return {};
  },
  components: { MyButton, MyInput, MyLabel },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
