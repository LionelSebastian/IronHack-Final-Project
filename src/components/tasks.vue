<template>
  <div class="text-center">
    <form class="py-7" @submit.prevent="createNew(),tasksStore.fetchTasks()">
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
                  <form @submit.prevent="tasksStore.updateTask(2, task.id),tasksStore.fetchTasks()">
                   <button >Hacer</button>
                  </form> 
                 </div>
              </div>             
            </th>

            <th><div v-for="(task) in tasksStore.tasks">   
                  <div v-if="task.status == 2" >
                  {{ task.title}}
                    <form @submit.prevent="tasksStore.updateTask(3,   task.id), tasksStore.fetchTasks()">
                      <button >Hecha</button>
                    </form>
                  </div>
                </div>
            </th>

            <th>
              <div v-for="(task) in tasksStore.tasks">   
                <div v-if="task.status == 3" >
                {{ task.title}} 
                <form @submit.prevent="borrar(task.id), tasksStore.fetchTasks()">                            
                 <button >DELETE</button>
                 </form>   
                </div>
              </div>
            </th>

            <th> {{ tasksStore.tasks }}</th>
          </tr>
        </tbody>

      </table>  
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
     },

     updateCurrent() {
      this.tasksStore.updateTask(
        this.status,
        this.id
        );  
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
