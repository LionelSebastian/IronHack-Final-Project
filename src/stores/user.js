
import { defineStore } from "pinia";
import { supabase } from "../supabase";



export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },

  async signUp(user, password){
    //respone maybe better in the begining
      const{data, error}=await supabase.auth.signUp({
        email: user,
        password: password,
      });
      if (error) throw error;
      if(data) this.user = data.user;
      //this$router.push("/"); cambiar de ruta
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

  },

});

