import { createMemoryHistory, createRouter } from 'vue-router'

import About from './components/About.vue'
import Todos from './components/Todos.vue'
import Folio from './components/Folio.vue'
const routes = [
    { path: '/', name:'about',component: About },
    { path: '/todos',name:'todos', component: Todos },
    { path: '/folio',name:'folio', component: Folio },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})
export default router;