<template>
  <div class="flex gap-4 m-6 justify-between bg-slate-300">
    <h1 class="text-sky-900">{{ userStore.user.user_metadata.name }}</h1>
    <button
      v-if="userStore.user !== null"
      @click="logOut()"
      class="cursor-pointer"
      alt="Sign Out"
    >
      <img class="h-5" src="../../public/logoutBlue.png" alt="Sign Out" />
    </button>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";

export default {
  computed: {
    ...mapStores(userStore),
  },
  data() {
    return {
      flexStart: "justify-start",
      spaceBetween: "justify-between",
    };
  },
  methods: {
    logOut() {
      this.userStore.signOut();
    },
  },
};
</script>

<style scoped></style>
