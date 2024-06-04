import Product from "./Product.js"
export default {
    components:{Product},
    template:`
    <div class="container mx-auto flex flex-wrap mt-6">
        <product v-for="p in products" :p="p" @addToCart="addToCart"></product>
    </div>
    `,
    props:{
        products:Array
    },
    methods:{
        addToCart(p){
            this.$emit('addToCart',p)
        }
    }
}