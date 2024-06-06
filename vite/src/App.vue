<template>
  <Todos />
</template>

<script>
  import Todos from './components/Todos.vue';
  export default {
    components:{Todos},
    data(){
      return {
        title:'Hello Vite 123'
      }
    } 
  }
</script>

<style>
  h1 {
    background-color: #2f4ee9;
  }
</style>