import { defineStore } from "pinia";
import { supabase } from "../supabase";

export default defineStore("tasks", {
  state() {
    return {
      tasks: null,
    };
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
    async createTask(userId, title, status) {
      const { error } = await supabase
        .from("tasks")
        .insert({ user_id: userId, title: title, status: status });
    },
    async updateTask(status, id) {
      const { error } = await supabase
        .from("tasks")
        .update({ status: status })
        .eq("id", id);
    },
  },
});
