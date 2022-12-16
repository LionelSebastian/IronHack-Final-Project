<template>
    <body class=" justify-between bg-blue-100 py-6 px-3 min-h-full w-1/4">
        <!-- <div class="justify-between "> -->
        <section class="flex max-w-1/3"> 
            <RouterLink to="/dashboard/user"  >
              <img src="../../public/user.png" alt="User-logo">
            </RouterLink>
           
            <RouterLink to="/dashboard/tasks">
                <img src="../../public/tasks.png" alt="tasks-logo">
            </RouterLink>
          
            <RouterLink to="/dashboard/contact">
            <img src="../../public/contact.png" alt="contactc-us-logo">  
            </RouterLink>         
        </section>           
        
         <form class="py-3 flex flex-col" @submit.prevent="createNew()">
         <input type="text" placeholder="título" v-model="title" class="" />
         <button type="submit">Create a new taks</button>
        </form> 
        <section>  
            
          <div>    
          <chart/>
          </div> 
          
          <div class="flex justify-around">

            <div class="w-1/4 text-center p-3  bg-blue-300 rounded-full">
            {{tasksStore.tasks.filter( task => task.status == 1).length }}
            <p>Todo</p>
            </div> 

            <div class=" w-1/4 text-center p-3  bg-blue-300 rounded-full">
            {{tasksStore.tasks.filter( task => task.status == 2).length }}
            <p>Active</p> 
            </div> 

            <div class=" w-1/4 text-center p-3  bg-green-200 rounded-full">
            {{ tasksStore.tasks.filter( task => task.status == 3).length }}
            <p>Done</p>
            </div> 

            <div class="w-1/4 text-center p-3  bg-green-500 rounded-full">
            {{ tasksStore.tasks.filter( task => task.status == 4).length }}
            <p class=" font-thin text-sm hover:text-base">Archived</p>
            </div>
          </div>
                   
          <div>
          <task/>
          </div>

        </section> 

    </body>
 </template>
    
 <script> 
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

import task from "../components/task.vue"
import chart from "../components/chart.vue"
              

export default {
  data() {
    return {
      user_id: null,
      title: null,
      status: "1",
    };
  },

  components:{ task, chart },

  computed: {
    ...mapStores(userStore, tasksStore),
  },

  methods: {
    async createNew() {
      await this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status,   
      );
      await this.tasksStore.fetchTasks();
    },

    async updateCurrent(status, id) {
      await this.tasksStore.updateTask(status, id);
      await this.tasksStore.fetchTasks();
    },

    async borrar(id) {
      await this.tasksStore.deleteTask(id);
      await this.tasksStore.fetchTasks();
    },
  },

  mounted() {
    this.tasksStore.fetchTasks();
    console.log(tasksStore.tasks)
  },
};
 </script>  
  
 <style>
</style>
    
