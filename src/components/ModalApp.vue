<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-3"></div>
      <div class="col-sm-6">
        <div @click="makeActive(modal)" v-for="modal in modals" :key="modal.id">
          <!-- <button>{{modal.name}}{{modal.id}}</button> -->
          <Modals v-bind:modal="modal" v-if="modal.visible" />
        </div>
      </div>
      <Toolbox
        class="col-sm-3"
        v-on:add-label="addLabel"
        v-on:add-button="addButton"
        v-on:add-input="addInput"
      />
    </div>

    <!-- <UserForm/> -->
  </div>
</template>

<script>
import Modals from "./Modals.vue";
import Toolbox from "./Toolbox.vue";

export default {
  name: "ModalApp",
  components: {
    Modals,
    Toolbox
  },
  methods: {
    makeActive(modal) {
      this.activeUserFormId = modal.id;
      console.log(this.activeUserFormId);
      this.previousZindex = ++this.previousZindex;
      let p = this.previousZindex.toString();
      modal.style.zIndex = p;
    },
    addInput() {
      let activeUserFormId = this.activeUserFormId;
      this.modals.forEach(userForm => {
        console.log(userForm);
        if (userForm.id === activeUserFormId) {
          userForm.controls.push({
            id: userForm.controls.length + 1,
            name: "Input",
            type: "input",
            attributes: {
              value: "Type your name here"
            },
            style: {
              position: "absolute",
              left: "100px",
              top: "50px",
              width: "100px",
              height: "40px",
              resize: "both",
              overflow: "auto",
              zIndex: "1"
            }
          });
        }
      });
    },
    addButton() {
      let activeUserFormId = this.activeUserFormId;
      this.modals.forEach(userForm => {
        console.log(userForm);
        if (userForm.id === activeUserFormId) {
          userForm.controls.push({
            id: userForm.controls.length + 1,
            name: "Button",
            type: "button",
            attributes: {
              value: "Please Click me!!!"
            },
            style: {
              position: "absolute",
              left: "100px",
              top: "30px",
              width: "50px",
              height: "100px",
              resize: "both",
              overflow: "auto",
              zIndex: "1"
            }
          });
        }
      });
    },
    addLabel() {
      let activeUserFormId = this.activeUserFormId;
      this.modals.forEach(userForm => {
        console.log(userForm);
        if (userForm.id === activeUserFormId) {
          userForm.controls.push({
            id: userForm.controls.length + 1,
            name: "Label",
            type: "label",
            attributes: {
              value: "Good Morning"
            },
            style: {
              position: "absolute",
              left: "50px",
              top: "20px",
              width: "100px",
              height: "40px",
              resize: "both",
              overflow: "auto",
              zIndex: "1"
            }
          });
        }
      });
    }
  },
  created() {
    this.activeUserFormId = this.modals.length;
    console.log(this.activeUserFormId);
  },
  data() {
    return {
      activeUserFormId: "",
      selected: "",
      previousZindex: 1,
      modals: [
        {
          id: 1,
          name: "UserForm",
          visible: true,
          controls: [
            {
              id: 1,
              name: "Hello",
              type: "button",
              attributes: {
                value: "Hello"
              },
              style: {
                position: "absolute",
                left: "20px",
                top: "10px",
                width: "100px",
                height: "40px",
                resize: "both",
                overflow: "auto",
                zIndex: "1"
              }
            },
            {
              id: 2,
              name: "Chandan",
              type: "input",
              attributes: {
                value: "Hello"
              },
              style: {
                position: "absolute",
                left: "30px",
                top: "40px",
                width: "100px",
                height: "40px",
                resize: "both",
                overflow: "auto",
                zIndex: "1"
              }
            }
          ],
          style: {
            position: "absolute",
            display: "block",
            zIndex: "1",
            borderTop: "40px solid skyblue",
            borderLeft: "13px solid skyblue",
            borderRight: "13px solid skyblue",
            borderBottom: "13px solid skyblue",
            paddingTop: "5px",
            paddingLeft: "5px",
            width: "400px",
            height: "500px",
            background: "white",
            borderRadius: "1%",
            top: "10px",
            left: "20px",
          },
          innerStyle: {
            borderTop: "40px solid skyblue",
            borderLeft: "10px solid skyblue",
            borderRight: "10px solid skyblue",
            borderBottom: "10px solid skyblue",
            borderRadius: "1%",
            width: "250px",
            height: "300px",
            top: "0px",
            left: "0px",
            position: "absolute",
            background: "#fff",
            marginTop: "5px",
            marginLeft: "5px",
            resize: "both",
            overflow: "auto"
          }
        },
        {
          id: 2,
          name: "UserForm",
          visible: true,
          style: {
            position: "absolute",
            display: "block",
            zIndex: "1",
            borderTop: "40px solid skyblue",
            borderLeft: "13px solid skyblue",
            borderRight: "13px solid skyblue",
            borderBottom: "13px solid skyblue",
            top: 10,
            left: 20,
            paddingTop: "50px",
            paddingLeft: "50px",
            width: "400px",
            height: "500px",
            background: "white",
            borderRadius: "1%"
          },
          innerStyle: {
            borderTop: "40px solid skyblue",
            borderLeft: "10px solid skyblue",
            borderRight: "10px solid skyblue",
            borderBottom: "10px solid skyblue",
            borderRadius: "1%",
            width: "250px",
            height: "300px",
            top: "0px",
            left: "0px",
            position: "absolute",
            background: "#fff",
            marginTop: "5px",
            marginLeft: "5px",
            resize: "both",
            overflow: "auto"
          },
          controls: [
            {
              id: 1,
              name: "Hello",
              type: "button",
              attributes: {
                value: "Hello"
              },
              style: {
                position: "absolute",
                left: "20px",
                top: "10px",
                width: "100px",
                height: "40px",
                resize: "both",
                overflow: "auto",
                zIndex: "1"
              }
            },
            {
              id: 2,
              name: "Chandan",
              type: "input",
              attributes: {
                value: "Hello"
              },
              style: {
                position: "absolute",
                left: "30px",
                top: "40px",
                width: "100px",
                height: "40px",
                resize: "both",
                overflow: "auto",
                zIndex: "1"
              }
            }
          ]
        }
      ]
    };
  }
};
</script>

<style>
</style>
