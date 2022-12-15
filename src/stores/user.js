import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async signIn(user, password){
      //respone maybe better in the begining
        const{data, error}=await supabase.auth.signInWithPassword({
          email: "lionel.cioffi@gmail.com",
          password: "lionel29",
        });
        if (error) throw error;
        if(data) this.user = data.user;
       
        this.$router.push("/dashboard/tasks"); 
    },

    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
  },
 }
});


