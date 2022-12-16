<template>
  <form class="mx-auto text-center" @submit.prevent="register()">
    <input
      type="email"
      placeholder="ingresa tu email"
      v-model="newUser"
      class=""
    />
    <br />
    <input type="text" placeholder="ingresa password" v-model="newPassword" />
    <br />
    <input type="text" placeholder="ingresa nombre" v-model="newPhone" />
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
      newUser: null,
      newPassword: null,
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
