<template>
    <form class="mx-auto text-center" @submit.prevent="login()">
      <input
        type="email"
        placeholder="ingresa tu email"
        v-model="user"
        class=""
      />
      <br />
      <input type="text" placeholder="ingresa password" v-model="password" />
      <br />
      <button type="submit">ENTER</button>
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