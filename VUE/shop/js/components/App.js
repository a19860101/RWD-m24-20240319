import Products from './Products.js'
export default {
    components:{Products},
    template:`
        <nav class="sticky w-full flex justify-between p-4 bg-slate-300">
            <a href="#">LOGO</a>
            <div>
                <a href="#" @click="isOpen = true">
                    <span v-if="carts.length" >{{carts.length}}</span>
                    <i class="fa-solid fa-cart-shopping fa-xl"></i>
                </a>
            </div>
        </nav>
        <div :class="{'right-0':isOpen}"class="top-0 z-50 h-full fixed bg-slate-100 w-[360px] right-[-360px] px-8 pt-12 duration-300">
            <div class="flex flex-wrap items-center py-4" v-for="c in carts">
                <div class="w-24 h-24"><img :src="c.image" alt="" class="w-full h-full object-cover"></div>
                <div class="shrink">
                    <h4 class="">{{c.title}}</h4>
                    <div>{{c.price}}</div>
                </div>
            </div>
            <div v-if="carts.length"> <a href="#" @click="clearCarts()">清空購物車</a></div>
            <div>共 {{total}}</div>
            <a href="#" @click="isOpen = false" class="absolute top-4 left-4">
                <i class="fa-solid fa-circle-xmark fa-xl"></i>
            </a>
        </div>
        <products :products="products"></products>
    `,
    data(){
        return {
            isOpen:false,
            products:[],
            carts:[]
        }
    },
    methods:{
        addToCart(p){
            console.log(p)
            this.carts.push(p)
        },
        clearCarts(){
            if(confirm('確認清空購物車？')){
                this.carts.length = 0;
            }
        }
    },
    computed:{
        total(){
            if(this.carts.length > 0){
                return this.carts.map(data=>data.price).reduce((a,b)=>a+b);
            }else{
                return 0;
            }
        }
    },
    created(){
        let url = 'https://fakestoreapi.com/products';
        fetch(url).then(res=>res.json()).then(data=>{
            this.products = data;
            console.log(data)
        }) 
        
    }
}