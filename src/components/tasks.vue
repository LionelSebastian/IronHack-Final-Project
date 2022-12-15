<template>
  <div class="text-center">
    <form class="py-7 flex flex-col" @submit.prevent="createNew()">
      <input type="text" placeholder="título" v-model="title" class="" />
      <button type="submit">CREATE</button>
    </form>

    <table
      class="table-auto mx-auto bg-slate-400 rounded-xl group space-x-6 border-separate border-spacing-6 border border-slate-500"
    >
      <thead>
        <tr>
          <th>TODO</th>
          <th>In PROGRESS</th>
          <th>COMPLETED</th>
        </tr>
      </thead>

      <tbody>
        <th class="">
          <div v-for="task in tasksStore.tasks" class="w-[200px] my-5">
            <div
              v-if="task.status == 1"
              class="w-[200px] h-[100px] rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <div>
              {{ task.title }}
              </div>
              <button
                @click="updateCurrent(2, task.id)"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
                TO DO
              </button>
              <div class="flex-col">
                <div class="text-xs text-slate-500">
                  {{ task.inserted_at.slice(0, 10) }} / 
                  {{ task.inserted_at.slice(11, 19) }}
                </div>
              </div>
            </div>
          </div>
        </th>

        <th>
          <div v-for="task in tasksStore.tasks" class="w-[200px] my-5">
            <div
              v-if="task.status == 2"
              class="w-[200px] h-[100px] rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <div>
              {{ task.title }}
              </div>
              <button
                @click="updateCurrent(3, task.id)"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
                DONE
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
              class="w-[200px] h-[100px] rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
              <div>
                {{ task.title }}
              </div>
              <button
                @click="borrar(task.id)"
                class="bg-white hover:bg-gray-100 text-gray-800 font-semibold px-2 border border-gray-400 rounded shadow">
                DELETE
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
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped></style>
