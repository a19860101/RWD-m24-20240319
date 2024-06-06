<template>
  <AppNav />
  <AppHeader />
  <About :content="about" />
  <Folio :folios="folios"/>
  <Contact />
  <AppFooter />
</template>

<script>
  import AppNav from './components/Nav.vue'
  import AppHeader from './components/Header.vue'
  import About from './components/About.vue'
  import Folio from './components/Folio.vue'
  import Contact from './components/Contact.vue'
  import AppFooter from './components/Footer.vue'

  export default {
    components:{AppNav,AppHeader,About,Folio,Contact,AppFooter},
    data(){
      return {
        folios:[],
        about:{
          title:'about me',
          text:'液晶鬱悶遭遇理解傢俱重新有的，位元購買魔獸妹妹審核發佈日期趨勢些什麼安全智能，引導不起夫妻全家長度對付，提前世界盃，腦。',
          list:['item1','item2','item3']
        }
      }
    },
    created(){
            let url = 'https://picsum.photos/v2/list?page=6&limit=16';
            fetch(url).then(res=>res.json()).then(data=>{this.folios = data})
        }
  }
</script>