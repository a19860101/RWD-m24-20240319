<template>
    <div class="todos">    
        <TodoCreate @addTodo="add" />
        <TodoList :todos="todoFilter.uncompleted" title="未完成"/>
        <TodoList :todos="todoFilter.completed" title="已完成"/>
    </div>

</template>
<script>
    import TodoList from './TodoList.vue'
    import TodoCreate from './TodoCreate.vue'
    export default {
        components:{TodoList,TodoCreate},
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
            add(payload){
                this.todos.push({
                    id: Date.now(),
                    name: payload,
                    isCompleted: false
                });
            }
        },
        computed:{
            todoFilter(){
                return {
                    completed:this.todos.filter(data=>data.isCompleted===true),
                    uncompleted:this.todos.filter(data=>data.isCompleted===false),
                }
            },
            todoCompleted(){
                return this.todos.filter(data=>data.isCompleted===true);
            },
            todoUnCompleted(){
                return this.todos.filter(data=>data.isCompleted===false);
            }
        }
    }
</script>