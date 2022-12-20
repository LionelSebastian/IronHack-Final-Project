
  <template>
      <div class="h-[90vh] text-center  text-sky-900 shadow-xl bg-slate-300 group">
        
        <div class="text-2xl pt-12 text-center text-sky-900 bg-slate-300">
          <!-- <img src="../../src/icons/done-icon.svg" alt="clockIcon" class="w-5 ml-1"> -->
          <h1 class="py-1 text-2xl">Welcome {{ userStore.user.name}}</h1>  
        </div> 
        
      <!-- <div> -->
        <h3 class="text-xl pt-16 pb-4">Tu correo es {{ userStore.user.email}}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserEmail()">Change your e-mail</button>
        <!-- <form class="mx-auto my-3.5 text-center" @submit.prevent="login()"> -->
        <input
          type="email"
          placeholder="email"
          v-model="newEmail"
          class="rounded-lg my-1 px-4 bg-slate-200"
        />
        <!-- </div> -->
        
        <h3 class="text-xl py-6" >Tu nombre es {{ userStore.user.user_metadata.name }}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserName(newName)">Change your name</button>
        <input
        type="text"
        placeholder="Nuevo nombre de usuario"
        v-model="newName"
        class="rounded-lg my-1 px-4 bg-slate-200"
        />

        <h3 class="text-xl py-6">Tu telefono es  {{ userStore.user.user_metadata.phone }}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl " @click="userStore.updateUserPhone(newPhone)">Change your phone</button>
        <input
        type="text"
        placeholder="Phone"
        v-model="newPhone"
        class="rounded-lg my-1 px-4 bg-slate-200"
        />

        <h3 class="text-xl py-6">Insert a new password </h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserPassword(newPassword)">Change your password</button>
        <input
        type="text"
        placeholder="*********"
        v-model="newPassword"
        class="rounded-lg my-1 px-4 bg-slate-200"
        />
      
        <h3 class="text-xl py-6">Te registraste el {{userStore.user.confirmed_at.slice(0,10)}}</h3>
        <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="alert()">Delete account</button>
               
        <!-- <h3 class="text-xl py-6">Tienes {{ tasksStore.getByStatus(4).length }} tareas archivadas </h3>
        <RouterLink to="/dashboard/archived">
          <button class=" w-1/2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="">Go to archived</button>
        </RouterLink> -->
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
     methods:{
      alert(){
        alert('Good try!! Not your call....Have a great one ;)')    
      }
     }
    }
  
  </script>  
  
  <style scoped>
  
  
  </style>
  