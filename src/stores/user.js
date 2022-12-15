import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async signUp(user, password, phone) {
      const { data, error } = await supabase.auth.signUp({
        email: user,
        password: password,
        phone: phone,
      });
      if (error) throw error;
      if(data) this.user = data.user;
    },

    async signIn(user, password){
      //respone maybe better in the begining
        const{data, error}=await supabase.auth.signInWithPassword({
          email: user,
          password: password,
        });
        if (error) throw error;
        if(data) this.user = data.user;
       
        this.$router.push("/dashboard");
        if (error) throw error; 
    },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.$router.push({ name: "Auth" })
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


