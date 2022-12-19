<template>
       <section class="flex-col max-w-1/3"> 
          
          <div class="flex">      
            <RouterLink class="flex justify-around items-center" to="/dashboard/user"  >
              <svg class="h-8 w-8 text-blue-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
              <h4 class="pl-2 text-blue-800">User</h4>
            </RouterLink>
          </div>

          <div class="flex">           
            <RouterLink class="flex justify-around items-center" to="/dashboard/tasks">
              <svg class="h-8 w-8 text-blue-400"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />  <line x1="9" y1="14" x2="15" y2="14" /></svg>
              <h4 class="pl-2 text-blue-800"> Tasks</h4>
            </RouterLink>
          </div>
          
          <div class="flex">
            <RouterLink class="flex justify-around items-center" to="/dashboard/contact">
              <svg class="h-8 w-8 text-blue-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="13" rx="2" width="5" height="7" />  <rect x="15" y="13" rx="2" width="5" height="7" />  <path d="M4 15v-3a8 8 0 0 1 16 0v3" /></svg>
              <h4 class="pl-2 text-blue-800">Contact us</h4>
            </RouterLink>  
          </div> 

        </section>  
        <section class="flex mx-auto">
          <form class="py-7 flex-col flex gap-2 justify-center" @submit.prevent="createNew()">
      <input
        type="text"
        placeholder=" task name"
        v-model="title"
        class="w-40 border 1 border-black rounded"/>
      <button
        type="submit"
        class=" mx-auto w-2/3 bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
        CREATE
      </button>
    </form>      

</section> 
</template>

<script>
    import { RouterLink } from 'vue-router'
    import { mapStores } from "pinia";
    import userStore from "../stores/user";
    import tasksStore from "../stores/tasks";

    export default {
  data() {
    return {
      user_id: null,
      title: null,
      status: "1",
      array: [],
    };
  },

  computed: {
    ...mapStores(userStore, tasksStore),
  },

  methods: {

    async createNew() {
      await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status,
        this.timeTask
      );
      this.title=""
      await this.tasksStore.fetchTasks();
    },
  },
 };
</script>