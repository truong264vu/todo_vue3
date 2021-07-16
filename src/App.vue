<template>
  <div id="app">
    <Navbar />
    <AddTodo />
    <Todos />
    <Statusbar />
    <Progressbar />

  </div>
</template>

<script>
import Navbar from './components/Navbar'
import Todos from './components/Todos'
import Statusbar from './components/StatusBar.vue'
import Progressbar from './components/ProgressBar'
import AddTodo from './components/AddTodo'
export default {
  name: 'App',
  components: {Navbar , Todos , Statusbar , Progressbar , AddTodo}
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(219, 219, 219);
  margin: 20px auto;
  width: 90%;
  max-width: 800px;
}
</style>
