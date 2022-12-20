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
          });
        if (error) { 
          alert(error.message) 
          return 
        };
        if(data) this.user = data.user;
        console.log(`data es: ${data}`)
       
        this.$router.push({ name: "Tasks" }); 
    },

     
    async signOut() {
      const { error } = await supabase.auth.signOut();
      this.user = null;
      this.$router.push({ name: "SignIn" })
    },

    async updateUserEmail(newEmail) {
      const {data, error} = await supabase.auth.updateUser({email: newEmail})  
  
      if (error) { 
        alert(error.message) 
        return 
      };

      if(data) this.user = data.user;
      console.log(`data es: ${data}`)
      alert('you will need to click the confirmation link on your email :)')      
     },

    async updateUserName(newName) {
      const{data, error} = await supabase.auth.updateUser({
        data: { 
          name:newName}
       }) 

       if (error) { 
        alert(error.message) 
        return 
      };

      if(data) this.user = data.user;
      console.log(`data es: ${data}`)
      alert('Tu nombre se ha cambiado con exito:)')      
     },

    async updateUserPassword(newPassword) {   
      const { data, error } = await supabase.auth.updateUser({password: newPassword})
    
      if (error) { 
        alert(error.message) 
        return 
      };

      if(data) this.user = data.user;
      console.log(`data es: ${data}`)
      alert('Tu password se ha cambiado con exito:)')      
     },

    async updateUserPhone(newPhone) {
      const{data, error} = await supabase.auth.updateUser({
        data: { 
          phone:newPhone}
       }) 

       if (error) { 
        alert(error.message) 
        return 
      };

      if(data) this.user = data.user;
      console.log(`data es: ${data}`)
      alert('Tu telefono se ha cambiado con exito:)')      
     },



    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    
  },

});


