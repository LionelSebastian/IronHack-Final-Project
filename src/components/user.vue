
  <template>
      <div class="h-[90vh] text-center  text-sky-900 shadow-xl bg-slate-300 group">
        
        <div class=" text-slate-300 group bg-sky-900 shadow-xl">
          <!-- <img src="../../src/icons/done-icon.svg" alt="clockIcon" class="w-5 ml-1"> -->
          <h1 class="py-1 text-2xl">- • Welcome {{ userStore.user.name}}• -</h1>  
        </div> 
        
      <!-- <div> -->
        <h3 class="text-xl pt-16 pb-4">Tu correo es {{ userStore.user.email}}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserEmail()">Change your e-mail</button>
        <!-- </div> -->
        
        <h3 class="text-xl py-6" >Tu nombre es {{ userStore.user.name }}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserName(this.user)">Change your name</button>
        
        <h3 class="text-xl py-6">Tu telefono es  {{ userStore.user.phone }}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserPhone">Change your phone</button>
        
        <h3 class="text-xl py-6">Te registraste el {{userStore.user.confirmed_at.slice(0,10)}}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="">Delete account</button>
        
        <h3 class="text-xl py-6">Tienes {{ tasksStore.getByStatus(4).length }} tareas archivadas </h3>
        <RouterLink to="/dashboard/archived">
          <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="">Go to archived</button>
        </RouterLink>
      </div>
  </template>
  
  <script>

  import { mapStores } from "pinia"
  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'
  import { RouterLink} from "vue-router";

  
  export default{
    computed:{
      ...mapStores(userStore, tasksStore)      
     },
    }
  
  </script>  
  
  <style scoped>
  
  
  </style>
  