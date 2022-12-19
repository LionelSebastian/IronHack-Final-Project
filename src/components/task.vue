<template>
    <div class="w-5/6 rounded-xl bg-white bg-opacity-50 shadow-xl hover:rounded-2xl mx-auto">
        <div class="text-center">
            Aca quizas iria un v-if con una variable que se activara cuando picas a una tarea en cioncreto
        </div>
        <!-- <button
         @click="updateCurrent(2, task.id)"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
            TO DO
        </button>
        <div class="flex-col">
           <div class="text-xs text-slate-500">
            fecha
            {{ task.inserted_at.slice(0, 10) }} / 
            {{ task.inserted_at.slice(11, 19) }}
            </div>
        </div> -->
    </div>
</template>

<script>
import { mapStores } from "pinia";

import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
    data() {
    return {
      user_id: null,
      title: null,
      status: "1",
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

  // mounted() {
  //   this.tasksStore.fetchTasks();
  //   console.log(this.tasksStore.tasks)
  // },
};
</script>