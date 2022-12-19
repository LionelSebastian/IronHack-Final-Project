<template>
  <h1>Please Sign up:</h1>
  <form class="mx-auto text-center" @submit.prevent="register()">
    <input
    type="email"
    placeholder="insert tu email"
    v-model="newUser"
    class="rounded-lg my-1 px-4 bg-slate-200"
    />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="insert password" v-model="newPassword" />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="insert the same password" v-model="newPassword2" />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="text" placeholder="insert name" v-model="newPhone" />
    <br />
    <button v-if="newPassword !== null && newPassword !== '' && newPassword === newPassword2" class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="submit">Create account</button>
  </form>
  <RouterLink to="/">Back to sign in</RouterLink>
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
      newUser: null,
      newPassword: "",
      newPassword2: "",
      newPhone: null,
    };
  },
  methods: {
    register() {
      this.userStore.signUp(this.newUser, this.newPassword, this.newPhone);
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
