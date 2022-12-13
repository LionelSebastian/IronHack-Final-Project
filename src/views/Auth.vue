<template>
    <navbar/>
   AUTENTICATE
    <form @submit.prevent = "login()" >
        <input type="email" v-model="user">
        <input type="text" v-model="password">
        <button type="submit">ENTER</button>
    </form>
 
    <RouterLink to="/Dashboard">Go to Dashboard</RouterLink>
    <foot/>
</template>
    
<script>
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia"
import userStore from '../stores/user'
import navbar from '../components/navbar.vue';
import foot from '../components/foot.vue'
export default{
    components: {navbar, foot},
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
        this.userStore.signUp(this.user, this.password);
     }   
    },
}
</script>
    
    
<style scoped>
    
</style>

