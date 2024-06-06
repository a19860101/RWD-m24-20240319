<template>
    <li>
        <input type="checkbox" v-model="item.isCompleted">
        {{item.name}}
    </li>
</template>
<script>
    export default {
        props:{
            item:Object
        }
    }
</script>