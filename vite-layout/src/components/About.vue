<template>
    <section id="about">
        <h2>關於</h2>
        <div class="container">
            <div class="about-img">
                <img src="https://picsum.photos/id/92/600/800" alt="">
            </div>
            <div class="about-content">
                <h3>{{ content.title }}</h3>
                <p>
                    {{ content.text }}
                </p>
                <ul>
                    <li v-for="item in content.list">{{ item }}</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
    export default {
        props:{
            content:Object
        }
    }
</script>