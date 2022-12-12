
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

  async signup(email, password){
      const{data, error} =await supabase.auth.signUp({
        email: email,
        password: password,
      });
      if (error) throw error;
      if(data) this.user = data.user;
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

