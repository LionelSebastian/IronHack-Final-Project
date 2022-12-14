
  <template>
    <navbar/>
    <h1>Soy el Dash board::: Hola user!!!</h1>
    <button @click="tasksStore.fetchTasks">Fetch</button>
    <RouterLink to="/">Sign Out</RouterLink>
    <!-- <div> {{ userStore.user.name}} </div> -->   
    <RouterView/>
    <foot/>
  </template>
  
  <script>
  import { mapStores } from "pinia" 
  import { RouterLink, RouterView} from 'vue-router'
  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'

  import foot from '../components/foot.vue'
  import navbar from '../components/navbar.vue'
  
  export default{

    components: {foot, navbar},
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
  
  </style>
  