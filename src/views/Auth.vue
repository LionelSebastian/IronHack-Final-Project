<template>
    <navbar class="h-1/8"/>
  
    <body class="text-center bg-slate-400">  

    <h1 class="p-7">Please Sign in:</h1>
    
    <RouterView/>
    
    <RouterLink to="/signup" clas="cursor-pointer text-sky-900">¿Are you not registred? Create a free account<Input:c></Input:c></RouterLink>
    
    <!-- <RouterLink to="/Dashboard/tasks">Go to Dashboard</RouterLink> -->
    </body>
    <foot/>

</template>
    
<script>
import { RouterLink, RouterView } from 'vue-router';
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

