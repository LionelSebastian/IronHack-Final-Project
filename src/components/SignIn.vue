<template>
  <div class=" flex justify-center mr-6 mt-12 animate__animated animate__fadeIn">
      <img src="../../src/icons/LNDteamAuth.png" alt="logoLNDauth"
      class="mb-6 pr-3 mt-16">
  </div>
  <h1 class="text-slate-600">Please Sign in:</h1>
  <form class="mx-auto my-3.5 text-center" @submit.prevent="login()">
      <input
        type="email"
        placeholder="email"
        v-model="user"
        class="rounded-lg my-1 px-4 bg-slate-200"
      />
      <br />
      <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="password" v-model="password" />
      <br />
      <button class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="submit">ENTER</button>
    </form>
    <div>
    <RouterLink to="/signup" clas="mb-3.5 cursor-pointer class">Sing up for free<Input:c></Input:c></RouterLink>
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
      user: null,
      password: null,
    };
  },
  methods: {
    login() {
      this.userStore.signIn(this.user, this.password);
    },
  },
};
</script>

<style scoped>
.animate__animated.animate__fadeIn {
  --animate-duration: 3s;
}
input {
  border: solid 2px rgba(4, 4, 4, 0);
}
button {
  border: solid 2px rgba(4, 4, 4, 0);
  margin: 5px;
}
</style>