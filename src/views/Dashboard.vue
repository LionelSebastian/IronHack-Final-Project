<template>
  <main class="flex min-h-screen">
    <sidebar class="w-1/4 min-w-[300px]" />
    <div  class="w-3/4">
      <RouterView/>
      <foot />
    </div>
  </main>

</template>

<script>
import { mapStores } from "pinia";
import { RouterView } from "vue-router";
import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

import foot from "../components/foot.vue";
import navbar from "../components/navbar.vue";
import sidebar from "../components/sidebar.vue";
import archived from "../components/archived.vue"

export default {
  components: { foot, navbar, sidebar, archived },

  computed: {
    ...mapStores(userStore, tasksStore),
  },

  methods: {
    login() {
      this.userStore.signUp();
    },
  },
  mounted() {
    this.tasksStore.fetchTasks();
  },
};
</script>

<style scoped></style>
