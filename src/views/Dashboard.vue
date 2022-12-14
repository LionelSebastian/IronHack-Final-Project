
  <template>
    <navbar/>
    <header class="flex justify-around pb-7">
      <h1>Soy el Dash board::: Hola user!!!</h1>
      <button class="border-button" @click="tasksStore.fetchTasks">Fetch</button>
      <RouterLink to="/"> <button class="border-solid">Volver a Auth</button></RouterLink>
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
     }   
    },
  }
  </script>  
  
  <style scoped>
  .button{
    border:3px solid black,
  } 
  </style>
  