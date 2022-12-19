<template>
  <div class="w-auto bg-slate-400 flex">
    <div
      class="w-[800px] flex flex-col justify-center items-center mt-4">
      <div class="w-[400px] h-auto py-2 px-2 rounded-lg text-center text-slate-300 group bg-sky-900 shadow-xl">- • ARCHIVED • -</div>
      <div
        v-for="task in tasksStore.tasks"
        class="w-[400px] h-auto bg-white bg-opacity-50 rounded-xl overflow-hidden shadow-lg m-4 p-3  text-center">
        <div
          v-if="task.status == 4"
          class="">
          <div class="text-sky-900 font-semibold pb-2">{{ task.title }}</div>
          <div class="text-xs text-slate-500">
            {{ task.inserted_at.slice(0, 10) }} / {{ task.inserted_at.slice(11, 19) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import tasksStore from "../stores/tasks";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapStores(tasksStore),
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
  width: 75vw;
}
</style>
