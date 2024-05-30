import Todo from './Todo.js'
export default {
    components:{
        'todo':Todo
    },
    template:`
        <h2 v-if="todos.length">{{title}} ({{todos.length}})</h2>
        <ul>
            <todo v-for="todo in todos" :key="todo.id" :todo="todo"></todo>      
        </ul>
    `,
    props:{
        todos:Array,
        title:String
    }
}