<template>

    <form action="">
        <input type="text" v-model="input">
        <input type="submit" value="新增事項" @click.prevent="add()">
    </form>
</template>
<script>
    export default {
        data(){
            return {
                input:''
            }
        },
        methods:{
            add(){
                this.$emit('addTodo',this.input);
                this.input = '';
            }
        }
    }
</script>