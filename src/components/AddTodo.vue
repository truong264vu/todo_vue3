<template>
 <div id="form" v-if="isAuthenticated">
     <form @submit="onSubmit">
         <input type="text" placeholder="name todo" v-model="title">
         <input type="submit" value="Add" >
     </form>
  </div>
</template>

<script>
import {v4 as uuidv4} from 'uuid'
import {  mapActions , mapGetters} from 'vuex'
export default {
    name: 'AddTodo',
    data() {
        return {
            title: ''
        }
    },
    computed: mapGetters(['isAuthenticated']),
    methods: {
        ...mapActions(['addTodo']),
       
        onSubmit(event) {
            event.preventDefault()
            console.log(this.title)
            this.addTodo({
                id: uuidv4(),
                title:this.title,
                completed: false,
            })
            this.title = ''
             
        }
    }
    
}
</script>

<style scoped>
    form {
        display: flex;
        height: 30px;
    }
    input[type='text'] {
        width: 90%;
    }

    input[type='submit']{
        width: 10%;
    }
</style>