
  <template>
    <navbar/>
    <header class="flex justify-around pb-7">
      <h1>Hola {{ userStore.user.email }} </h1>      
      <RouterLink to="/"> <button class="border-solid">Volver a Autenticarte</button></RouterLink>
      <!-- <button @click="logOut()">Sign Out</button> -->
   </header>  
  <tasks/>
  <foot/>
  </template>
  
  <script>
  import { mapStores } from "pinia" 
  import { RouterLink, RouterView} from 'vue-router'
  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'

  import foot from '../components/foot.vue'
  import navbar from '../components/navbar.vue'
  import tasks from '../components/tasks.vue'

  export default{

    components: {foot, navbar, tasks},
    
    computed:{
      ...mapStores(userStore, tasksStore)
     },

    methods:{
     login(){
        this.userStore.signUp()
      }, 
    //  logOut() {
    //     this.userStore.signOut()
    //   }   
    },
  }
  </script>  
  
  <style scoped>
  .button{
    border:3px solid black,
  } 
  </style>
  