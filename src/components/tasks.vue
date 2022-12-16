<template>
  <div class="">
    <RouterLink to="/"> <button class="border-solid">Volver a Autenticarte</button></RouterLink>
    <form class="py-7 flex gap-2 justify-center" @submit.prevent="createNew()">
      <input
        ref="taskInput"
        type="text"
        placeholder=" task name"
        v-model="title"
        class="w-40 border 1 border-black rounded"/>
      <button
        @click="resetInput"
        type="submit"
        class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
        CREATE
      </button>
    </form>

    <table
      class="table-auto mx-auto bg-slate-400 rounded-xl group space-x-6 border-separate border-spacing-6 border border-slate-500">
      <thead class="text-white">
        <tr>
          <th>TO DO</th>
          <th>In PROGRESS</th>
          <th>COMPLETED</th>
        </tr>
      </thead>

      <tbody class="">
        <th class="">
          <div v-for="task in tasksStore.tasks" class="w-[200px] my-5 text-base text-sky-900 ">
            <div
              v-if="task.status == 1"
              class="w-[200px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <div class="">
                {{ task.title }}
              </div>
              <div class="">
                <div class="buttons flex justify-center gap-2 mb-2">
                  <button>
                    <svg class="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                  </button>
                  <!-- checkToDo -->
                  <button @click="updateCurrent(2, task.id)">
                    <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </button>
                  <!-- TrashButton -->
                  <button @click="borrar(task.id)">
                    <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17" /><line x1="14" y1="11" x2="14" y2="17" />
                    </svg>
                  </button>
                </div>
                <div class="text-xs text-slate-500">
                  {{ task.inserted_at.slice(0, 10) }} /
                  {{ task.inserted_at.slice(11, 19) }}
                </div>
              </div>
            </div>
          </div>
    </div >
    <div class=" bg-red-300 w-1/3">
      IN PROGRESS
      <div v-for="task in tasksStore.tasks" class="w-5/6 my-5 mx-auto hover:animate-bounce">
            <div
              v-if="task.status == 2"
              class="w-[200px] h-[100px] rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
            >
              <div>
                {{ task.title }}
              </div>
              <!-- checkInProgress -->
              <button @click="updateCurrent(3, task.id)">
                <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
              </button>
              <div class="text-xs text-slate-500">
                {{ task.inserted_at.slice(0, 10) }} /
                {{ task.inserted_at.slice(11, 19) }}
              </div>
            </div>
          </div>
        </th>

        <th>
          <div v-for="task in tasksStore.tasks" class="w-[200px] my-5">
            <div
              v-if="task.status == 3"
              class="w-[200px] h-[100px] rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl"
            >
              <div>
                {{ task.title }}
              </div>
              <!-- TrashButton -->
              <button @click="borrar(task.id)">
                <svg
                  class="h-4 w-4 text-black"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="3 6 5 6 21 6" />
                  <path
                    d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
                  />
                  <line x1="10" y1="11" x2="10" y2="17" />
                  <line x1="14" y1="11" x2="14" y2="17" />
                </svg>
              </button>
              <div class="text-xs text-slate-500">
                {{ task.inserted_at.slice(0, 10) }} /
                {{ task.inserted_at.slice(11, 19) }}
              </div>
            </div>
          </div>
        </th>
      </tbody>
    </table>
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
    resetInput() {
      this.$refs["taskInput"].value = "";
    },
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped></style>
