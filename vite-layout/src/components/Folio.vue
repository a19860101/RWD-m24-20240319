<template>
    <section id="folio">
        <h2>作品集</h2>
        <div class="container">
            <div class="folio-item" v-for="folio in folios" :key="folio.id">
                <a :href="folio.download_url">
                    <img :src="folio.download_url" alt="">
                </a>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props:{
            folios:Array
        }
        
    }
</script>