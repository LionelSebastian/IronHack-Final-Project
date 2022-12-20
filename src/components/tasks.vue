<template>
  <div>  
    <!-- <navbar /> -->
    <table
      class="tableWidth px-10 h-[90vh] bg-slate-400 group space-x-6 border-separate border-spacing-6">
      <thead class="">
        <tr>
          <th class="max-w-1/3 min-w-[300px] h-auto py-2 px-2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl">
          <div clas="flex tableHead"> 
            <img src="../../src/icons/clockwise-icon.svg" alt="clockIcon" class="w-5 ml-1 tableIcon">
            <span>- • TO DO • -</span>
          </div>
          </th>
          <th class="max-w-1/3 min-w-[300px] h-auto py-2 px-2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl">
          <div clas="flex tableHead"> 
            <img src="../../src/icons/inProgress-icon.svg" alt="clockIcon" class="w-7 ml-1 tableIcon">
            <span>- • ACTIVE • -</span>
          </div>
          </th>
          <th class="max-w-1/3 min-w-[300px] h-auto py-2 px-2 rounded-lg text-slate-300 group bg-sky-900 shadow-xl">
          <div clas="flex tableHead"> 
            <img src="../../src/icons/done-icon.svg" alt="clockIcon" class="w-5 ml-1 tableIcon">
            <span>- • DONE • -</span>
          </div>
          </th>

        </tr>
      </thead>

      <tbody class="">
        <th class="">
          <div v-for="task in tasksStore.tasks" class="min-w-1/3 h-auto my-5 text-base text-sky-900">
            <div
              v-if="task.status == 1"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-300">
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
                  <button @click="updateCurrent(4, task.id)">
                    <svg class="h-4 w-4 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
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
        </th>

        <th>
          <div v-for="task in tasksStore.tasks" class="min-w-1/3 my-5 text-base text-sky-900 ">
            <div
              v-if="task.status == 2"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-300">
              <div>
                {{ task.title }}
              </div>
              <div class="buttons flex justify-center gap-2 mb-2">
                  <button>
                    <svg class="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                  </button>
                  <!-- checkToDo -->
                  <button @click="updateCurrent(3, task.id)">
                    <svg class="h-4 w-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                  </button>
                  <button @click="updateCurrent(4, task.id)">
                    <svg class="h-4 w-4 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
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
        </th>

        <th>
          <div v-for="task in tasksStore.tasks" class="min-w-1/3 my-5 text-base text-sky-900 ">
            <div
              v-if="task.status == 3"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-300">
              <div>
                {{ task.title }}
              </div>
              <div class="buttons flex justify-center gap-2 mb-2">
                  <button>
                    <svg class="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"/></svg>
                  </button>
                  <button @click="updateCurrent(4, task.id)">
                    <svg class="h-4 w-4 text-black"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />  <polyline points="17 21 17 13 7 13 7 21" />  <polyline points="7 3 7 8 15 8" /></svg>
                  </button>
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
        </th>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";
// import navbar from "./navbar.vue";

export default {
  data() {
    return {
      user_id: null,
      title: null,
      status: "1",
    };
  },

  // components: { navbar },

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
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
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
  width:75vw;
}
</style>
