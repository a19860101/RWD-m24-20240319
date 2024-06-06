<template>
    <nav>
        <router-link to="/">About</router-link>
        <router-link to="todos">Todos</router-link>
        <router-link :to="
            {
                name:'folio'
            }
        ">Folio</router-link>
    </nav>
    <router-view></router-view>
</template>