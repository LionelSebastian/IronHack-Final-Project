<template>
  <div class="text-center">
    <form class="py-7" @submit.prevent="createNew()">
      <input type="text" placeholder="título" v-model="title" class="" />
      <button type="submit">CREATE</button>
    </form>
 
    <table class="table-auto mx-auto border-solid bg-yellow">
      <thead>
        <tr>
          <th>User</th>
          <th>TODO</th>
          <th>In Progress</th>
          <th>COMPLETED</th>
          <th>UTILITARIA</th>
        </tr>
      </thead>

        <tbody>
          <tr>
            <th>  {{ userStore.user.email }} </th>         
            <th>
              <div v-for="(task) in tasksStore.tasks">  

                <div v-if="task.status == 1" >
                {{ task.title}}              
                <button @click="tasksStore.updateTask(2, task.id)">HACER</button>
                </div>

            </div>
             
            </th>
            <th><div v-for="(task) in tasksStore.tasks">   
                <div v-if="task.status == 2" >
                {{ task.title}}
                <button @click="tasksStore.updateTask(3, task.id)">HECHO</button>
                </div>
                </div>
            </th>
            <th>
              <div v-for="(task) in tasksStore.tasks">   
                <div v-if="task.status == 3" >
                {{ task.title}}                                
                <button @click="borrar(task.id)">DELETE</button>
                </div>
              </div>
            </th>
            <th> {{ tasksStore.tasks }}</th>
          </tr>
        </tbody>

      </table>    
    <button @click="submitTask"></button>
  </div>
</template>

<script>
import { mapStores } from "pinia";

import userStore from "../stores/user";
import tasksStore from "../stores/tasks";

export default {
  data() {
    return {
      user_id: null,
      title: null,
      status: "1"
    };
  },
  computed: {
    ...mapStores(userStore, tasksStore),
  },

  methods: {
    createNew() {
      this.tasksStore.createTask(
        this.userStore.user.id,
        this.title,
        this.status
      );
      this.fetch()
     },

     updateCurrent() {
      this.tasksStore.updateTask(
        this.status,
        this.id
        );
      },    
      
      fetch (){
        this.tasksStore.fetchTasks()
      },
     borrar(id) {
      this.tasksStore.deleteTask(id);
    }
  }, 

   mounted(){
       this.tasksStore.fetchTasks()
 },
 };
  </script>
  
  
  <style scoped>
  input{
    border: 1px solid;
  }
   table, th, td {
  border: 1px solid;
}
button{
  border: 1px solid;
}
</style>
