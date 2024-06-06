<template>
  <Nav></Nav>
  <div class="nav">
    <a href="#" @click="panel = 'About'">About</a>
    <a href="#" @click="panel = 'Todos'">Todos</a>
  </div>
  <component :is="panel"></component>
</template>

<script>
  import Todos from './components/Todos.vue';
  import About from './components/About.vue';
  import Nav from './components/Nav.vue';
  export default {
    components:{Todos,About,Nav},
    data(){
      return {
        title:'Hello Vite 123',
        panel:'About',
      }
    } ,
    methods:{
    }
  }
</script>

<style>
  h1 {
    background-color: #2f4ee9;
  }
</style>