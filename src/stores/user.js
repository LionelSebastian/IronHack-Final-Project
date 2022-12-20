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
  
  persist: {
    enabled: true,
    strategies: [
      {
        key: "user",
        storage: localStorage,
      },
    ],
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
      console.log(user)
    },
    async signIn(user, password){
      //respone maybe better in the begining
        const{data, error}=await supabase.auth.signInWithPassword({
          email: user,
          password: password,
        const { data, error }=await supabase.auth.signInWithPassword({
          email: user,
          password: password,
        });
        if (error) { 
          alert(error.message) 
          return
        };
        if(data) this.user = data.user;
        console.log(`data es: ${data}`)
       
        this.$router.push({ name: "Tasks" }); 
    },
    // async signIn(user, password){
    //   //respone maybe better in the begining
    //     const data =await supabase.auth.signInWithPassword({
    //       email: user,
    //       password: password,
    //     });
    //     if (data.error) console.log(`data es: ${data}`);
    //     if(data) this.user = data.user;
       
    //     this.$router.push({ name: "Tasks" }); 
    // },

    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.user = null;
      this.$router.push({ name: "SignIn" })
    },

    async updateUserName() {
      const { user, error } = await supabase.auth.update({
        data: { first_name: 'world' }
      })
      // if (error) throw error;
      // if(user) this.user = user;
      console.log(data)
    },

    async updateUserEmail() {
      const data = await supabase.auth.updateUser({email: 'chofi29@hotmail.com'})  
      // if (error) throw error;
      // if(data) this.user = data.user;
      console.log(data)


    async updateUserPhone() {
      const { user, error } = await supabase.auth.update({
        data: { phone: '666666666' }
       }) 
      // if (error) throw error;
      // if(data) this.user = data.user;
      console.log(data)
    },


    // async fetchUser() {
    //   const user = await supabase.auth.user();
    //   this.user = user;
    // },
 },

});


