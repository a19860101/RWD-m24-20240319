export default {
    template:`
        <div class="lg:w-1/4 md:w-1/3 w-1/2 p-3">
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
    `,
    props:{
        p:Object
    }
}