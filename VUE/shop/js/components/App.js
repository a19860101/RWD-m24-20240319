import Products from './Products.js'
import Carts from './Carts.js'
import Navigation from './Navigation.js'
export default {
    components:{Products,Carts,Navigation},
    template:`
        <navigation :carts="carts" @open="isOpen=true"</navigation>
        <carts :isOpen="isOpen" :carts="carts" :total="total" @open="isOpen = false" @clearCarts="clearCarts"></carts>
        <products :products="products" @addToCart="addToCart"></products>
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