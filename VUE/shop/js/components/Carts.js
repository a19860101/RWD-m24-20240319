export default {
    template:`
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
            <a href="#" @click="this.$emit('open')" class="absolute top-4 left-4">
                <i class="fa-solid fa-circle-xmark fa-xl"></i>
            </a>
        </div>
    `,
    data(){
        return {
            // isOpen: false
        }
    },
    methods:{
        clearCarts(){
            this.$emit('clearCarts')
        }
    },
    props:{
        carts:Array,
        total:Number,
        isOpen:Boolean
    }
}