new Vue({
  el: '#app',

  data: {
    todos: [],
    newTodoText: ''
  },

  methods: {
    addTodo: function () {
      if (this.newTodoText) {
        this.todos.push({ title: this.newTodoText })
        this.newTodoText = ''
      }
    },

    removeTodo: function (index) {
      this.todos.splice(index, 1)
    }
  }
})