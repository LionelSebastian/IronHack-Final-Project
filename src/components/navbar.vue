<template>
   <div :class="`flex py-2 px-3.5 ${justify()} bg-blue-400`" >
   <img src="../../public/LNGteam.png" class="h-7" alt="Logo">
   <button v-if="userStore.user !== null" @click="logOut()" class="cursor-pointer" alt="Sign Out"><img class="h-5" src="../../public/logout-icon.png" alt="Sign Out"></button>
   </div>
</template>
   
<script>
import { mapStores } from "pinia";
import userStore from "../stores/user";

export default {
  computed: {
    ...mapStores(userStore),
  },
  data(){
    return {
      flexStart: "justify-start",
      spaceBetween: "justify-between",
    }
  },
  methods: {
    logOut() {
      this.userStore.signOut();
    },
    justify() {
      if (this.userStore.user !== null) {
        return this.spaceBetween;
      }
      return this.flexStart
    }
  },
};
</script>
   
   
<style scoped>

   
</style>
   