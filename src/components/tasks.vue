<template>
  <div class="text-center">
    <form class="py-7" @submit.prevent="createNew()">
      <input type="text" placeholder="título" v-model="title" class="" />
      <button type="submit">CREATE</button>
    </form>
    <!-- <form class="py-7" @submit.prevent="updateCurrent()">
      <button type="submit">UPDATE</button>
    </form> -->
    <table class="table-auto mx-auto border-solid bg-yellow">
      <thead>
        <tr>
          <th>User</th>
          <th>TODO</th>
          <th>In Progress</th>
          <th>COMPLETED</th>
          <th>UTILITARIA</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th>{{ userStore.user.email }}</th>
          <th>
            <div v-for="task in tasksStore.tasks">
              {{ task.title }}
              <button @click="tasksStore.updateTask(task.status, task.id)">UUPDATE</button>
            </div>
          </th>
          <th>aca irian status 2</th>
          <th>Aca irian status 3</th>
          <th>{{ tasksStore.tasks }}</th>
        </tr>
      </tbody>
    </table>
    <button @click="submitTask"></button>
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
      status: "1"
    };
  },
  computed: {
    ...mapStores(userStore, tasksStore),
  },

  // this.userStore.signIn(this.user, this.password);
  methods: {
    createNew() {
      this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status
      );
    },
    updateCurrent() {
      this.tasksStore.updateTask(
        this.status,
        this.id);
    },
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
</style>
