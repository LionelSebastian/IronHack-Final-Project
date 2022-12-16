<template>
    <form class="mx-auto text-center" @submit.prevent="login()">
      <input
        type="email"
        placeholder="ingresa tu email"
        v-model="user"
        class="rounded-lg my-1 px-4 bg-slate-200"
      />
      <br />
      <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="ingresa password" v-model="password" />
      <br />
      <button class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="submit">ENTER</button>
    </form>
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
input {
  border: solid 2px black;
}
button {
  border: solid 2px black;
  margin: 5px;
}
</style>