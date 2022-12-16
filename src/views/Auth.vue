<template>
    <navbar/>
  
    <body class="text-center">  

    <h1 class="p-7">Autenticate o registrate</h1>
    
    <SignIn />
    <!-- <form class ="mx-auto text-center" @submit.prevent = "login()" >
        <input type="email" placeholder="ingresa tu email" v-model="user" class="">
        <br/>
        <input type="text" placeholder="ingresa password" v-model="password">
        <br/>
        <button type="submit">ENTER</button>
    </form> -->
 
    <RouterLink to="/Dashboard/tasks">Go to Dashboard</RouterLink>
    </body>
    <foot/>

</template>
    
<script>
import { RouterLink } from 'vue-router';
import { mapStores } from "pinia";
import userStore from '../stores/user';
import navbar from '../components/navbar.vue';
import foot from '../components/foot.vue';
import SignIn from '../components/SignIn.vue' 

export default{
    components: {navbar, foot, SignIn},
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
    button{
        border: solid 2px black;
        margin: 5px;
    }
</style>

