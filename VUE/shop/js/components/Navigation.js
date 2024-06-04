export default {
    template:`
        <nav class="sticky w-full flex justify-between p-4 bg-slate-300">
            <a href="#">LOGO</a>
            <div>
                <a href="#" @click="this.$emit('open')">
                    <span v-if="carts.length" >{{carts.length}}</span>
                    <i class="fa-solid fa-cart-shopping fa-xl"></i>
                </a>
            </div>
        </nav>
    `,
    props:{
        carts:Array
    }
}