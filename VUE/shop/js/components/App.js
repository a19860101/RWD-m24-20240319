import Products from './Products.js'
import Carts from './Carts.js'
export default {
    components:{Products,Carts},
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
        <carts :isOpen="isOpen" :carts="carts" :total="total"></carts>
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