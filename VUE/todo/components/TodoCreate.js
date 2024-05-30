export default {
    template:`
    <form action="">
        <input type="text" v-model="input">
        <input type="submit" value="新增事項" @click.prevent="add()">
    </form>
    `,
    data(){
        return{
            input:''
        }
    },
    methods:{
        add(){
            this.$emit('create',this.input);
            this.input='';
        }
    }

}