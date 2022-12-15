
  <template>
    <div>
     <h1>soy el usuario {{ userStore.user.email}}</h1>  
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
  