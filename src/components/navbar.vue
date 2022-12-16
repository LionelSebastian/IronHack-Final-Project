<template>
   <div class="flex pb justify-between bg-blue-400">
   <img src="../../public/Ironhack_logologo.png" alt="Logo">
   <h1>Iron Task navbar</h1>
   <button @click="logOut()">Sign Out</button>
   </div>
</template>
   
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";

export default {
  computed: {
    ...mapStores(userStore),
  },
  methods: {
    logOut() {
      this.userStore.signOut();
    },
  },
};
</script>
   
   
<style scoped>

   
</style>
   