<template>
  <div class="flex justify-center mr-6 mt-12">
      <img src="../../src/icons/LNDteamAuth.png" alt="logoLNDauth"
      class="mb-6 pr-3 mt-16">
  </div>
  <h1 class="text-slate-600">Please Sign up:</h1>
  <form class="mx-auto my-3.5  text-center" @submit.prevent="register()">
    <input
    type="email"
    placeholder="insert tu email"
    v-model="newUser"
    class="rounded-lg my-1 px-4 bg-slate-200"
    />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="password" v-model="newPassword" />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="password" placeholder="confirm password" v-model="newPassword2" />
    <br />    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="text" placeholder="name" v-model="firstName" />
    <br />
    <input class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="text" placeholder="phone number" v-model="phone" />
    <br />
    <button v-if="newPassword !== null && newPassword !== '' && newPassword === newPassword2" class="rounded-lg w-1/8 my-1 px-4 bg-slate-200" type="submit">Create account</button>
  </form>
  <RouterLink to="/">Back to Sign in</RouterLink>
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
      firstName: null,  
      phone: null,
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
  border: solid 2px rgba(4, 4, 4, 0);
}
button {
  border: solid 2px rgba(4, 4, 4, 0);
  margin: 5px;
}
</style>
