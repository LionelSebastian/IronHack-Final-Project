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
    // pending() {
    //  return this.tasks.filter((task) => task.status == 1);
    // },
    // inProgress(){ 
    //  return this.tasks.filter( (task) => task.status == 2);
    // },  
    // completed(){ 
    //   return this.tasks.filter( (task) => task.status == 3);
    // },
    // archived(){ 
    //   return this.tasks.filter( (task) => task.status == 4);
    // },
    getByStatus(state){
      return function (status){
        return state.tasks.filter((task) => task.status === status);
      };
    },
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
    async createTask(userId, title, status,) {
      const { error } = await supabase
        .from("tasks")
        .insert({ user_id: userId, title: title, status: status,});
    },
    async updateTask(status, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ status: status })
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
