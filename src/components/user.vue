
  <template>
    <div class="text-center mx-auto">
     <h1 class="py-6">Hola {{ userStore.user.email}}</h1>  
     <h3 class="py-6">Tu correo es : {{ userStore.user.email}}</h3>
     <h3 class="py-6" >Tu nombre es:: {{}}</h3>
     <h3 class="py-6">Tu telefono es: {{}}</h3>
     <h3 class="py-6">Te registraste en: {{}}</h3>
     <h3 class="py-6">Has archivado XX tareas(podemos agregar un status apra archivadas)</h3>
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
  