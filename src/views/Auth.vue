 <template>
   AUTENTICATE
    <form @submit.prevent = "login()" >
        <input type="email" v-model="user">
        <input type="text" v-model="password">
        <button type="submit">ENTER</button>
    </form>
 
    <RouterLink to="/Dashboard">Go to Dashboard</RouterLink>
</template>
    
<script>
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia"
import userStore from '../stores/user'



export default{
    computed:{
      ...mapStores(userStore)
     },
     data(){
        return {
            user: null,
            password: null,
        }
     },
    methods:{
     login(){
        this.userStore.signIn(this.user, this.password);
        console.log("lio")
        console.log(this.user.id)
     }   

    },
}
</script>
    
    
<style scoped>
    
</style>
    