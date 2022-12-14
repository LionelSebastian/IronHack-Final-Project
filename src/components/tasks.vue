
  <template>
    <div>
     SOY UNA TAREA  
     <RouterLink to="/Dashboard"><button>DASHBOARD</button></RouterLink>
    <button @click="submitTask"></button>
    </div>
  </template>
  
  <script>
  import { RouterLink} from 'vue-router'
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
  