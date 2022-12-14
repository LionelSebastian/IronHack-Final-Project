<template>
    <navbar/>
    Autenticate
    <form @submit.prevent = "login()" >
        <input type="email" placeholder="ingresa tu email" v-model="user" class="">
        <input type="text" placeholder="ingresa password" v-model="password">
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
        this.userStore.signIn(this.user, this.password);
     }   
    },
}
</script>
    
    
<style scoped>
    input{
        border: solid 2px black
    }
</style>

