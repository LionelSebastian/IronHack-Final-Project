
  <template>
    <div class="text-center mx-auto">
     <h1 class="py-6">Hello {{ userStore.user.first_name}}</h1>  
     <h3 class="py-6">E-mail: {{ userStore.user.email}}</h3>
     <h3 class="py-6">Phone number: {{ userStore.user.phone}}</h3>
     <h3 class="py-6">You are registred in: {{}}</h3>
     <h3 class="py-6">Has archivado XX tareas(podemos agregar un status apra archivadas)</h3>
    </div>
  </template>
  
  <script>
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
  