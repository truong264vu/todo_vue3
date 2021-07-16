<template>
  <p v-if="isAuthenticated" class="progress-bar">Progress: {{proGress}}%</p>
</template>

<script>
import {mapGetters, mapState} from 'vuex'
export default {
    name: 'Progressbar',
    computed: {...mapGetters(['proGress','isAuthenticated']),...mapState(['auth'])}
        
    
}
</script>
<style>
 .progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color: black;
}

</style>