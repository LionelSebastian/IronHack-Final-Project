
  <template>
    <div>
     SOY UN USUARIO     
     <RouterLink to="/tasks"><button>TASKS</button></RouterLink>
    </div>
  </template>
  
  <script>
  import { RouterLink, RouterView} from 'vue-router'
  import { mapStores } from "pinia"
  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'
  
  export default{
    computed:{
      ...mapStores(userStore, tasksStore)
      
     },

  }
  </script>
  
  
  <style scoped>
  
  </style>
  