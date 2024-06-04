export default {
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
        <div class="container mx-auto flex flex-wrap mt-6">
            <div class="lg:w-1/4 md:w-1/3 w-1/2 p-3" v-for="p in products">
                <div class="border border-zinc-600 min-h-full">
                    <div class="aspect-square">
                        <img :src="p.image" alt="" class="w-full h-full object-cover">
                    </div>
                    <div class="p-3 flex flex-col justify-between h-full">
                        <h3 class="bg-blue-100">
                                {{p.title}}</h3>
                        <div class="flex items-center justify-between bg-zinc-200">
                            <span>$.{{p.price}}</span>
                            <a href="#" class="px-6 py-1 rounded-lg text-sm bg-blue-300" @click="addToCart(p)">加入購物車</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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