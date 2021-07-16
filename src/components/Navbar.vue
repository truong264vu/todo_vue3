<template>
  <div class="navbar">
      <h1>Todo App</h1>
      <ul>
          <li>Home</li>
          <li>About</li>
          <li v-if="isAuthenticated">TotalTodo: {{todos.length}} 
                <button @click="TOGGLE_AUTH">Log Out</button>     
          </li>
          <li v-else>
              <button @click="TOGGLE_AUTH">Log In</button>
          </li>
      </ul>
  </div>
</template>

<script>
import {mapMutations, mapGetters} from 'vuex'

export default {
    name: 'Navbar',
    computed: mapGetters(['isAuthenticated','todos']),
    methods: mapMutations(['TOGGLE_AUTH'])
}
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}

.navbar ul {
 display: flex;
 justify-content: space-around;
 align-items: center;
 list-style: none;
 padding: 0;
}
</style>