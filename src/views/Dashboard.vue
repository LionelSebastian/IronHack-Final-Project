
  <template>
      <navbar/>   
    <body class="flex">
        <sidebar/>    
        <RouterView/>    
    </body>    
    <foot/>
  </template>
  
  <script>

  import { mapStores } from "pinia" 
  import { RouterLink, RouterView} from 'vue-router'
  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'

  import foot from '../components/foot.vue'
  import navbar from '../components/navbar.vue'
  import sidebar from "../components/sidebar.vue"


  export default{

    components: {foot, navbar, sidebar},

    computed:{
      ...mapStores(userStore, tasksStore)
     },

    methods:{
     login(){
        this.userStore.signUp()
     }   
    },
    mounted() {
    this.tasksStore.fetchTasks();
    console.log(tasksStore.tasks)
  },
  }
  </script>  
  
  <style scoped>
  </style>
  