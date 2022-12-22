<template>
  <div class="h-[95vh] overflow-y-auto py-5 text-center bg-slate-300 border-l-3 border-slate-600">
    <div class="w-3/5 mx-auto mb-4 items-center">
      <h1 class="text-5xl mx-auto w-[500px] mt-3 mb-[30px] text-sky-900 opacity-10 bg-slate-300">
      ≥ARCHIVED TASKS
    </h1>
      <div
        v-for="task in tasksStore.getByStatus(4)"
        class="w-[400px] mx-auto h-auto bg-white bg-opacity-50 rounded-xl overflow-hidden shadow-lg m-4 pt-3 px-3 pb-1 text-center">
        <div v-if="tasksStore.getByStatus(4).length" class="">
          <div class="text-sky-900 font-semibold pb-2">{{ task.title }}</div>
          <div class="text-xs text-slate-500 pb-2">
            {{ task.inserted_at.slice(0, 10) }} /
            {{ task.inserted_at.slice(11, 19) }}
          </div>
          <div class="buttons flex justify-center gap-2 mb-2">
            <button @click="updateCurrent(2, task.id)">
              <svg
                class="h-4 w-4 text-black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M9 13l-4 -4l4 -4m-4 4h11a4 4 0 0 1 0 8h-1" />
              </svg>
            </button>
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(userStore, tasksStore),
  },
  methods: {

    async updateCurrent(status, id) {
      await this.tasksStore.updateTask(status, id);
      await this.tasksStore.fetchTasks();
    },

    async borrar(id) {
      await this.tasksStore.deleteTask(id);
      await this.tasksStore.fetchTasks();
    },
  }
};


</script>

<style scoped>
.tableHead {
  position: relative;
}
.tableIcon {
  position: absolute;
}
.tableWidth {
  width: 75vw;
}
</style>
