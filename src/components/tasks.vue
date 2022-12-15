<template>
  <div class="text-center">
    <form class="py-7" @submit.prevent="createNew()">
      <input type="text" placeholder="título" v-model="title" class="" />
      <button type="submit">CREATE</button>
    </form>

    <table class="table-auto mx-auto border-solid bg-yellow">
      <thead>
        <tr>
          <th>User data</th>
          <th>TODO</th>
          <th>In Progress</th>
          <th>COMPLETED</th>
          <th>Tasks data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>{{ userStore.user.email }}</th>

          <th>
            <div v-for="task in tasksStore.tasks">
              <div v-if="task.status == 1">
                {{ task.title }}
                <div class="text-xs">
                  {{ task.inserted_at.slice(0,10)}}
                  {{ task.inserted_at.slice(11,19)}}
                </div>
                  <button @click="updateCurrent(2, task.id)">TO DO</button>
              </div>
            </div>
          </th>

          <th>
            <div v-for="task in tasksStore.tasks">
              <div v-if="task.status == 2">
                {{ task.title }}
                <div class="text-xs">
                  {{ task.inserted_at.slice(0,10)}}
                  {{ task.inserted_at.slice(11,19)}}
                </div>
                  <button @click="updateCurrent(3, task.id)">DONE</button>
              </div>
            </div>
          </th>

          <th>
            <div v-for="task in tasksStore.tasks">
              <div v-if="task.status == 3">
                {{ task.title }}
                <div class="text-xs">
                  {{ task.inserted_at.slice(0,10)}}
                  {{ task.inserted_at.slice(11,19)}}
                </div>
                <button @click="borrar(task.id)">DELETE</button>
              </div>
            </div>
          </th>

          <th>{{ tasksStore.tasks }}</th>
        </tr>
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

<style scoped>
input {
  border: 1px solid;
}
table,
th,
td {
  border: 1px solid;
}
button {
  border: 1px solid;
}
</style>
