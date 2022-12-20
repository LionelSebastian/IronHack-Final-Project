<template>

  <body class="text-center py-20 bg-slate-400">
    <RouterView />
  </body>
  <!-- <footer class=" bg-blue-800">
    <foot />
  </footer> -->
</template>

<script>
import { RouterView } from "vue-router";
import { mapStores } from "pinia";
import userStore from "../stores/user";
import navbar from "../components/navbar.vue";
import foot from "../components/foot.vue";
import SignIn from "../components/SignIn.vue";

export default {
  components: { navbar, foot, SignIn },
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

body {
  height: 100vh;
} 
</style>
