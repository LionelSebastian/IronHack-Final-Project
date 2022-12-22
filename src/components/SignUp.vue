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
    <button v-if="newPassword !== null && newPassword !== '' && newPassword === newPassword2" class="rounded-lg w-1/8 my-1 px-4 bg-slate-200 transition duration-150 ease-in-out" data-bs-toggle="modal" data-bs-target="#exampleModal" type="submit">Create account</button> 
  </form>
  <RouterLink to="/">Back to Sign in</RouterLink>
  <!-- Modal -->
<!-- <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog relative w-auto pointer-events-none">
    <div
      class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
      <div
        class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
        <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">Modal title</h5>
      </div>
      <div class="modal-body relative p-4">
        check your email to verify your account
      </div>
      <div
        class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
        <button type="button" class="px-6
          py-2.5
          bg-purple-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-purple-700 hover:shadow-lg
          focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-purple-800 active:shadow-lg
          transition
          duration-150
          ease-in-out" data-bs-dismiss="modal">Close</button>
       
      </div>
    </div>
  </div>
</div> -->
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
      alert(`Please check your email to verify your account`)
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
