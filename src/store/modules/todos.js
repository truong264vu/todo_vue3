import axios from 'axios'
const TodoModules = {
    state: {
        todos: []
    },
    getters: {
        todos: state => state.todos,
        doneTodos : state => {
            return state.todos.filter(todo => todo.completed)
        },
        proGress : state => {
            const doneTodos = state.todos.filter(todo => todo.completed)
            return Math.round(doneTodos.length /state.todos.length * 100)
        }
    },
    actions: {
        async deleteTodo({commit}, TodoId){
            try {
                await axios.delete('https://jsonplaceholder.typicode.com/todos/${todoId}')
                commit('DELETE_TODO',TodoId)
            } catch (error) {
                console.log(error)
            }
        },
        async addTodo({commit} , newTodo){
            try {
                await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo)    
                commit('ADD_TODO',newTodo)
            } catch (error) {
                console.log(error)
            }
        },
        async getTodos({commit}) {
            try {
                const response = 
                await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
                commit('SET_TODOS',response.data)
            } catch (error) {
                console.log(error)
            }
        }
    
    },
    mutations: {
        
        CHANGE_CHECKED(state , TodoId) {
            state.todos.map(todo => {
                if(todo.id === TodoId) todo.completed =!todo.completed
                return todo
            })
        },
        DELETE_TODO(state,TodoId) {
            state.todos = state.todos.filter(todo => todo.id !== TodoId)
        },
        ADD_TODO(state, newTodo) {
             state.todos.push(newTodo)
        },
        SET_TODOS(state, todos) {
            state.todos =todos
        }
    }
}

export default TodoModules