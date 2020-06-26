<template>
  <div id="app">
    <!-- <Header />
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />-->
    <vue-window-modal
      :active="visibleFormCrud"
      title="Client 1"
      v-on:clickClose="visibleFormCrudUpdate(true)"
    >FOO TEXT ON DEFAULT SLOT :DDDDD 1</vue-window-modal>
    
    <ModalApp />
  </div>
</template>

<script>
import axios from "axios";
// import Todos from "./components/Todos.vue";
// import Header from "./components/layout/Header.vue";
// import AddTodo from "./components/AddTodo.vue";
import ModalApp from "./components/ModalApp.vue";

export default {
  name: "App",
  components: {
    // Todos,
    // Header,
    // AddTodo
    ModalApp
      },
  data() {
    return {
      visibleFormCrud: true,
      todos: [
        {
          id: 1,
          title: "Todo One",
          completed: false
        },
        {
          id: 2,
          title: "Todo Two",
          completed: true
        },
        {
          id: 3,
          title: "Todo Three",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      console.log(123);
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    addTodo(newTodo) {
      this.todos = [...this.todos, newTodo];
    }
  },
  created() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then(res => {
        this.todos = res.data;
      });
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}
.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}
.btn:hover {
  background: #666;
}
</style>
