import Todos from './Todos.js'
export default {
    components:{
        'todos':Todos
    },
    template:`
        <h1>{{title}}</h1>
        <todos></todos>
    `,
    data(){
        return {
            title: 'My Todo List'
        }
    },
}