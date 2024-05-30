export default {
    template:`
    <li>
        <input type="checkbox" v-model="todo.isCompleted">
        {{todo.name}}
    </li>
    `,
    props:{
        todo:Object
    }
}