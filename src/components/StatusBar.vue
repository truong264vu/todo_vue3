<template>
  <div class="status-bar" v-if="isAuthenticated">
      
      <ul>
          <p>Done :</p>
          <li v-for="todo in doneTodos" :key="todo.id">
            {{todo.title}} 
          </li>
      </ul>
  </div>
</template>

<script>
import {mapGetters , mapState  } from 'vuex'
export default {
    name: 'Statusbar',
    computed:{ ...mapGetters(['doneTodos','isAuthenticated']),
              ...mapState(['auth']),
             
    }
      
    
}
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
.status-bar li {
  list-style: none;
  
}
</style>