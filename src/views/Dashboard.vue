
  <template>
    <navbar/>   
    <body class="flex">
      <div class="self-start">
        <sidebar/>    
      </div>
      <div class="mx-auto">
        <RouterView/>
      </div>   
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
  }
  </script>  
  
  <style scoped>
  .button{
    border:3px solid black,
  } 
  </style>
  