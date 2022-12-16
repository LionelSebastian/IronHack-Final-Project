<template>
    <body class=" justify-between bg-blue-100 py-6 px-3 min-h-full">
        <!-- <div class="justify-between "> -->
        <section class=""> 
            <RouterLink to="/dashboard/user"  >usuario</RouterLink>
            <img src="../../public/Ironhack_logologo.png" alt="">
            <RouterLink to="/dashboard/tasks"  >tareas</RouterLink>
            <img src="../../public/favicon.ico" alt="">
            <RouterLink to="/dashboard/contact"  >contacto</RouterLink>
            <img src="../../public/Ironhack_logologo.png" alt="">
        </section>

        <form class="py-3 flex flex-col" @submit.prevent="createNew()">
        <input type="text" placeholder="título" v-model="title" class="" />
        <button type="submit">CREATE</button>
        </form> 
        <task/>
        <div class="text-center pb-5">
          Tienes 39 tareas archivadas
        </div>  
    </body>
 </template>
    
 <script> 
import { RouterLink } from 'vue-router'
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

import task from "../components/task.vue"

export default {
  data() {
    return {
      user_id: null,
      title: null,
      status: "1",
    };
  },

  components:{ task },

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
    
