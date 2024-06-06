<template>
    <h2 v-if="todos.length">{{title}} ({{todos.length}})</h2>
    <ul>
        <Todo  v-for="todo in todos" :key="todo.id" :item="todo"/>
    </ul>
</template>
<script>
    import Todo from './Todo.vue'
    export default {
        components:{Todo},
        props:{
            todos:Array ,
            title: String
        }
    }
</script>