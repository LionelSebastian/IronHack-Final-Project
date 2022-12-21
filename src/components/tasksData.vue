
<template>
     <div class="mx-7 py-5 flex w-[255px]">
        <RouterLink class="w-1/4 text-center mr-1" to="/dashboard/tasks">
          
                <div class="w-full text-center p-1 text-white bg-blue-300 rounded-lg">
                {{ this.tasksStore.getByStatus(1).length }}
                </div> 
                <p class="text-sky-900 pt-2 text-xs">To do</p>
          </RouterLink>

            <RouterLink to="/dashboard/tasks" class="w-1/4 text-center mr-1">
              <div class=" w-full text-center p-1 text-white bg-sky-600 rounded-lg">
              {{ this.tasksStore.getByStatus(2).length }}
              </div> 
              <p class="text-sky-900 text-xs pt-2">Active</p> 
            </RouterLink> 

            <RouterLink to="/dashboard/tasks" class="w-1/4 text-center mr-1">
              <div class=" w-full text-center p-1 text-white bg-sky-700 rounded-lg">
              {{ this.tasksStore.getByStatus(3).length }}
              </div> 
              <p class="text-sky-900 text-xs pt-2">Done</p>
            </RouterLink>
   

            <RouterLink to="/dashboard/archived" class="w-1/4 text-center">
              <div class="w-full text-center mr-1 p-1 text-white  bg-sky-800 rounded-lg">
              {{ this.tasksStore.getByStatus(4).length  }}
              </div>   
              <p class="text-sky-900 text-xs pt-2">Archive</p>
            </RouterLink>
        </div>

</template>
  
<script> 
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia";
import { mapState } from 'pinia';

import tasksStore from "../stores/tasks";
import userStore from "../stores/user"

              

export default {

computed: {
  ...mapStores(userStore, tasksStore),
},

};
</script>  


  
























<!-- <template>
    <div class="flex">
         <div class="text-center p-3 bg-red-300 rounded-full"> 
        {{ getByStatus(2) }} to do
        </div> 
        <div class="text-center p-3  bg-blue-300 rounded-full">
        {{tasksStore.tasks.filter( task => task.status == 2).length }} active 
        </div> 
        <div class="text-center p-3  bg-green-200 rounded-full">
        {{ tasksStore.tasks.filter( task => task.status == 3).length }} done
        </div> 
        <div class="text-center p-3  bg-green-500 rounded-full">
        {{ tasksStore.tasks.filter( task => task.status == 4).length }} archive
        </div>  -->
    <!-- </div>
</template>
<script>
import { mapStores } from "pinia";

import tasksStore from "../stores/tasks.js";

export default {

  computed: {
    ...mapStores(tasksStore),

    // toDo() {
    //   this.tasksStore.tasks.filter( tasks => tasks.status == 2).length
    //  }
    },
    methods:{   

  getByStatus(id) {
    this.tasksStore.fetchTasks();
    const tasks = this.tasksStore.tasks
    return tasks.filter( tasks => tasks.status == id).length;
     },
    },
    mounted() {
    this.tasksStore.fetchTasks();
    console.log(tasksStore.tasks)
  },
  };

</script> --> -->