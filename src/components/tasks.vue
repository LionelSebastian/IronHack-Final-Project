<template>
  <div
    class="h-[95vh] ml-[-15px] overflow-y-auto pt-5 text-center text-sky-900 shadow-xl bg-slate-300 group"
  >
    <h1
      class="text-5xl text-left ml-[60px] mb-[-20px] text-sky-900 opacity-10 bg-slate-300"
    >
      ≥TASKS
    </h1>
    <table
      class="tableWidth py-2 px-5 bg-slate-300 group border-separate border-spacing-6"
    >
      <thead class="">
        <tr>
          <th
            class="max-w-1/3 min-w-[300px] rounded-lg text-slate-300 group bg-sky-900 shadow-xl"
          >
            <div clas="flex tableHead">
              <span>🕥</span>
              <span class="font-normal mr-4"> • TO DO • </span>
            </div>
          </th>
          <th
            class="max-w-1/3 min-w-[300px] rounded-lg text-slate-300 group bg-sky-900 shadow-xl"
          >
            <div clas="flex tableHead">
              <span>⚙</span>
              <span class="font-normal mr-4"> • ACTIVE • </span>
            </div>
          </th>
          <th
            class="max-w-1/3 min-w-[300px] rounded-lg text-slate-300 group bg-sky-900 shadow-xl"
          >
            <div clas="flex tableHead">
              <span>🏁</span>
              <span class="font-normal mr-4"> • DONE • </span>
            </div>
          </th>
        </tr>
      </thead>

      <tbody class="align-top">
        <th
          class="pb-40"
          @drop="onDrop($event, 1)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div
            v-for="task in tasksStore.tasks"
            class="min-w-1/3 my-5 text-base text-sky-900"
            draggable="true"
            @dragstart="startDrag($event, task)"
          >
            <div
              v-if="task.status == 1"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-100"
            >
              <div>
                {{ task.title }}
              </div>
              <div class="font-normal text-xs mx-4">
                {{ task.description }}
              </div>

              <div class="buttons flex justify-center gap-2 mb-2">
                <button @click="editButton(task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <!-- checkToDo -->
                <button @click="updateCurrent(2, task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path
                      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    />
                  </svg>
                </button>
                <button @click="updateCurrent(4, task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
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
              <div class="flex justify-around">
                <div class="text-xs font-medium">
                  {{ task.inserted_at.slice(0, 10) }} /
                  {{ task.inserted_at.slice(11, 19) }}
                </div>
                <div class="text-xs font-normal">
                  {{ `N.: ${task.id} ` }}
                </div>
              </div>
              <transition>
                <div
                  v-if="this.taskId === task.id"
                  class="mx-auto flex flex-col mb-[-20px]"
                >
                  <input
                    v-model="task.title"
                    class="displayInput convert max-w-[350px] mx-2 h-[30px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  />
                  <textarea
                    v-model="task.description"
                    class="displayInput w-[220px] max-w-[350px] mx-2 h-[100px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  ></textarea>

                  <button
                    @click="
                      updateTaskTitle(task.title, task.id, task.description)
                    "
                    class=""
                  >
                    <svg
                      class="h-4 w-4 ml-[245px] mt-[-20px] text-black"
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
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="8" x2="8" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </th>

        <th
          class="pb-40"
          @drop="onDrop($event, 2)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div
            v-for="task in tasksStore.tasks"
            class="min-w-1/3 my-5 text-base text-sky-900"
            draggable="true"
            @dragstart="startDrag($event, task)"
          >
            <div
              v-if="task.status == 2"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-100"
            >
              <div>
                {{ task.title }}
              </div>
              <div class="font-normal text-xs mx-4">
                {{ task.description }}
              </div>

              <div class="buttons flex justify-center gap-2 mb-2">
                <button @click="editButton(task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <!-- checkToDo -->
                <button @click="updateCurrent(3, task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <polyline points="9 11 12 14 22 4" />
                    <path
                      d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"
                    />
                  </svg>
                </button>
                <button @click="updateCurrent(4, task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
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
              <div class="flex justify-around">
                <div class="text-xs font-medium">
                  {{ task.inserted_at.slice(0, 10) }} /
                  {{ task.inserted_at.slice(11, 19) }}
                </div>
                <div class="text-xs font-normal">
                  {{ `N.: ${task.id} ` }}
                </div>
              </div>
              <transition>
                <div
                  v-if="this.taskId === task.id"
                  class="mx-auto flex flex-col mb-[-20px]"
                >
                  <input
                    v-model="task.title"
                    class="displayInput convert max-w-[350px] mx-2 h-[30px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  />
                  <textarea
                    v-model="task.description"
                    class="displayInput w-[220px] max-w-[350px] mx-2 h-[100px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  ></textarea>

                  <button
                    @click="
                      updateTaskTitle(task.title, task.id, task.description)
                    "
                    class=""
                  >
                    <svg
                      class="h-4 w-4 ml-[245px] mt-[-20px] text-black"
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
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="8" x2="8" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                  </button>
                </div>
              </transition>
            </div>
          </div>
        </th>

        <th
          class="pb-40"
          @drop="onDrop($event, 3)"
          @dragenter.prevent
          @dragover.prevent
        >
          <div
            v-for="task in tasksStore.tasks"
            class="min-w-1/3 my-5 text-base text-sky-900"
            draggable="true"
            @dragstart="startDrag($event, task)"
          >
            <div
              v-if="task.status == 3"
              class="max-w-1/3 min-w-[300px] h-auto pt-1 pb-3 px-2 rounded-xl group space-y-3 bg-white bg-opacity-50 shadow-xl hover:bg-slate-100"
            >
              <div>
                {{ task.title }}
              </div>
              <div class="font-normal text-xs mx-4">
                {{ task.description }}
              </div>

              <div class="buttons flex justify-center gap-2 mb-2">
                <button @click="editButton(task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                    />
                  </svg>
                </button>
                <button @click="updateCurrent(4, task.id)">
                  <svg
                    class="h-4 w-4 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"
                    />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                </button>
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
              <div class="flex justify-around">
                <div class="text-xs font-medium">
                  {{ task.inserted_at.slice(0, 10) }} /
                  {{ task.inserted_at.slice(11, 19) }}
                </div>
                <div class="text-xs font-normal">
                  {{ `N.: ${task.id} ` }}
                </div>
              </div>
              <transition>
                <div
                  v-if="this.taskId === task.id"
                  class="mx-auto flex flex-col mb-[-20px]"
                >
                  <input
                    v-model="task.title"
                    class="displayInput convert max-w-[350px] mx-2 h-[30px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  />
                  <textarea
                    v-model="task.description"
                    class="displayInput w-[220px] max-w-[350px] mx-2 h-[100px] mt-3 text-sm font-light pl-2 rounded-md"
                    type="text"
                    v-show="message"
                    placeholder="edit me"
                  ></textarea>

                  <button
                    @click="
                      updateTaskTitle(task.title, task.id, task.description)
                    "
                    class=""
                  >
                    <svg
                      class="h-4 w-4 ml-[245px] mt-[-20px] text-black"
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
                      <circle cx="12" cy="12" r="9" />
                      <line x1="12" y1="8" x2="8" y2="12" />
                      <line x1="12" y1="8" x2="12" y2="16" />
                      <line x1="16" y1="12" x2="12" y2="8" />
                    </svg>
                  </button>
                </div>
              </transition>
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
      taskId: null,
      inputField: false,
      user_id: null,
      title: null,
      description: null,
      status: "1",
    };
  },

  // components: { navbar },

  computed: {
    ...mapStores(userStore, tasksStore),
  },

  methods: {
    async updateTaskTitle(title, id, description) {
      await this.tasksStore.updateTitle(title, id, description);
      await this.tasksStore.fetchTasks();
      this.editButton();
    },
    editButton(taskId) {
      this.taskId = taskId;
      this.inputField = !this.inputField;
    },

    async updateCurrent(status, id) {
      await this.tasksStore.updateTask(status, id);
      await this.tasksStore.fetchTasks();
    },

    async borrar(id) {
      await this.tasksStore.deleteTask(id);
      await this.tasksStore.fetchTasks();
    },

    startDrag(event, task) {
      console.log(task);
      event.dataTransfer.dropEffect = "move";
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("taskID", task.id);
    },

    onDrop(event, status) {
      const taskID = event.dataTransfer.getData("taskID");
      this.updateCurrent(status, taskID);
    },
  },

  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
.displayInput {
  display: block !important;
}

.tableHead {
  position: relative;
}
.tableIcon {
  position: absolute;
}
.tableWidth {
  width: 75vw;
}
.descriptionInput {
  word-wrap: break-word;
  word-break: break-word;
  height: 50px;
  width: 100px;
}
</style>
