<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  methods: {
    getTodos() {
      try {
        fetch("https://todos-mpwar.herokuapp.com/users/aleh/todos")
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            this.todos = data;
          });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getTodos();
  },
};
</script>

<template>
  <div>
    <header>
      <h1>Todo</h1>
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.text }}</li>
      </ul>
    </header>
  </div>
</template>