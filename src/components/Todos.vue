<template>
  <div class="todo-list">
      <ul v-if="isAuthenticated">
        <li   v-for="todo in todos" 
              :key="todo.id"
              :class="[todo.completed ? 'is-completed' : '']"
        >
            
            {{todo.title}}
            <input type="checkbox" :checked="todo.completed"
             @change="CHANGE_CHECKED(todo.id)">
             <button @click="deleteTodo(todo.id)">Delete</button>
        </li>
      </ul>
      <p v-else>Not isAuthenticated</p>
  </div>
</template>

<script>
import {mapActions, mapMutations, mapState , mapGetters}  from 'vuex'

export default {
    name: "todo",
    computed: {...mapState(['auth']),
              ...mapGetters(['todos','isAuthenticated'])
              },
    created() {
      this.getTodos()
    },
    methods: {...mapMutations(['CHANGE_CHECKED']),
              ...mapActions(['deleteTodo','getTodos'])}
}
</script>

<style scoped>
.todo-list ul {
 padding: 0 10px 10px 10px;
 list-style-type: none;
}

.todo-list li {
 padding: 10px;
 cursor: pointer;
 margin: 10px 0;
 border-radius: 4px;
 background: rgb(240, 240, 240);
 color: black;
}


.todo-list li button {
 float: right;
 margin-right: 20px;
}

.todo-list li button:hover {
 cursor: pointer;
 background: red;
 color: white;
}

p {
    text-align: center;
}
.todo-list li.is-completed {
  background: chocolate;
}
.todo-list li button {
 float: right;
 margin-right: 20px;
}
todo-list li button:hover {
 cursor: pointer;
 background: red;
 color: white;
}
</style>