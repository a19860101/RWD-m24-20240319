import TodoList from './TodoList.js'
import TodoCreate from './TodoCreate.js'
export default {
    components:{
        'todo-list':TodoList,
        'todo-create':TodoCreate
    },
    template:`
        <todo-create @create="add"></todo-create>
        <div>
            <todo-list :todos="filter.todoUnCompleted" title="未完成"></todo-list>
            <todo-list :todos="filter.todoCompleted" title="已完成"></todo-list>
        </div>
    `,
    data(){
        return{
            todos:[
                {
                    id:1,
                    name:'洗衣服',
                    isCompleted: true
                },
                {
                    id:2,
                    name:'運動',
                    isCompleted: false
                },
                {
                    id:3,
                    name:'做報告',
                    isCompleted: false
                },

            ]
        }
    },
    methods:{
        add(data){
            this.todos.push({
                id: Date.now(),
                name:data,
                isCompleted: false
            });
        }
    },
    computed:{
        // todoCompleted(){
        //     return this.todos.filter(data=>data.isCompleted===true);
        // },
        // todoUnCompleted(){
        //     return this.todos.filter(data=>data.isCompleted===false);
        // },
        filter(){
            return {
                todoCompleted:this.todos.filter(data=>data.isCompleted===true),
                todoUnCompleted:this.todos.filter(data=>data.isCompleted===false)
            }
        }
    }
}