import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("user", {
  state() {
    return {
      user: null,
    };
  },
  getters: {
    getById(state){
      return function (userId){
        return state.user;
      };
    },
  },

  actions: {
    async signUp(user, password, firstName, phone) {
      const { data, error } = await supabase.auth.signUp({
        email: user,
        password: password,
        options: {
          data: {
            first_name: firstName,
            phone: phone,
          }
        }
      });
      if (error) throw error;
      if(data) this.user = data.user;
    },
    async signIn(user, password){
      //respone maybe better in the begining
        const{data, error}=await supabase.auth.signInWithPassword({
          email: "lionel.cioffi@gmail.com",
          password: "lionel29",
        });
        if (error) throw error;
        if(data) this.user = data.user;
       
        this.$router.push({ name: "Tasks" }); 
    },
    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.user = null;
      this.$router.push({ name: "SignIn" })
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


