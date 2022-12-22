
  <template>
    <div class="h-[95vh] py-5 text-center text-sky-900 shadow-xl bg-slate-300 group">

      <h1 class="text-5xl mx-auto mt-4 mb-[80px] text-sky-900 opacity-10 bg-slate-300">≥USER DATA{{ userStore.user.name}}</h1>  

      <div class="my-5 flex flex-wrap justify-center items-center gap-4">
        <input
        type="email"
        placeholder="Insert your new e-mail"
        v-model="newEmail"
        class="w-[250px] h-8 px-4 rounded-lg bg-slate-200"
        />
        <button class="w-[150px] h-8 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserEmail()">Change email</button>
        <h3 class="w-full mr-[150px]">Your email is: {{ userStore.user.email}}</h3>      
      </div>

      <div class="my-5 flex flex-wrap justify-center items-center gap-4">
        <input
        type="text"
        placeholder="Insert your new user name"
        v-model="newName"
        class="w-[250px] h-8 px-4 rounded-lg bg-slate-200"
        />
        <button class="w-[150px] h-8 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserName(newName)">Change name</button>
        <h3 class="w-full mr-[230px]">Your user name is: {{ userStore.user.user_metadata.name }}</h3>      
      </div>

      <div class="my-5 flex flex-wrap justify-center items-center gap-4">
        <input
        type="text"
        placeholder="Insert your new phone name"
        v-model="newPhone"
        class="w-[250px] h-8  px-4 rounded-lg bg-slate-200"
        />
        <button class="w-[150px] h-8 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserPhone(newPhone)">Change phone</button>
        <h3 class="w-full mr-[239px]">Your phone number is:  {{ userStore.user.user_metadata.phone }}</h3>      
      </div> 

      <div class="my-5 flex flex-wrap justify-center items-center gap-4">
        <input
        type="password"
        placeholder="Insert your new password"
        v-model="newPassword"
        class="w-[250px] h-8 px-4 rounded-lg bg-slate-200"
        />
        <button class="w-[150px] h-8 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="userStore.updateUserPassword(newPassword)">Change password</button>
        <h3 class="w-full mr-[239px]">Change your password</h3>     
      </div>
          
      <h3 class="text-xl py-6">You are registered since: {{userStore.user.confirmed_at.slice(0,10)}}</h3>
      
      <button class="w-[150px] h-8 rounded-lg text-slate-300 group bg-sky-900 shadow-xl" @click="alert()">Delete account</button>

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
  