
<template>
     <div class="w-5/6 mx-auto py-5 flex justify-around">

          <div class="w-1/4 text-center mr-1">
                <div class="w-full text-center p-2 text-white bg-blue-300 rounded-full">
                {{ tasksStore.getByStatus(1).length }}
                </div> 
                <p class="text-sky-900 pt-2 text-xs">Todo</p>
            </div>

            <div class="w-1/4 text-center mr-1">
              <div class=" w-full text-center p-2 text-white bg-sky-600 rounded-full">
              {{ tasksStore.getByStatus(2).length }}
              </div> 
              <p class="text-sky-900 text-xs pt-2">Active</p> 
            </div> 

            <div class="w-1/4 text-center mr-1">
              <div class=" w-full text-center p-2 text-white bg-sky-700 rounded-full">
              {{ tasksStore.getByStatus(3).length }}
              </div> 
              <p class="text-sky-900 text-xs pt-2">Done</p>
            </div>

            <div class="w-1/4 text-center">
              <div class="w-full text-center mr-1 p-2 text-white  bg-sky-800 rounded-full">
              {{ tasksStore.getByStatus(4).length  }}
              </div>   
              <p class="text-sky-900 text-xs pt-2">Archive</p>
            </div>
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