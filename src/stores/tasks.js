import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: [],
      status:1,
    };
  },

 getters: {
    getByStatus: (state)=>{
    return (status)=>state.tasks.filter((task) => task.status === status);
  }
    // getByStatus(state){
    //   return function (status){
    //     return state.tasks.filter((task) => task.status === status);
    //   };
    // },
  },

  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      console.log(tasks);
    },
    async createTask(userId, title, description, status) {
      const { error } = await supabase
        .from("tasks")
        .insert({ user_id: userId, title: title, description: description, status: status,});
    },
    async updateTask(status, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ status: status })
        .eq("id", id);
    },
    async updateTitle(title, id, description) {
      const { error } = await supabase
        .from("tasks")
        .update({ title: title, description:description })
        .eq("id", id);
    },
    async deleteTask(id) {
      const { error } = await supabase
      .from("tasks")
      .delete()
      .eq("id",id);
    },
  },
});
