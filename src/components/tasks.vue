  <template>
    <div>
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
            <th><div v-for="(task, index) in tasksStore.tasks"> {{ tasksStore.tasks[index].title }}</div></th>
            <th>aca irian status 2</th>
            <th>Aca irian status 3</th>
            <th> {{ tasksStore.tasks }}</th>
          </tr>
        </tbody>

      </table>    
    <button @click="submitTask"></button>
    </div>
  </template>
  
  <script>

  import { mapStores } from "pinia"

  import userStore from '../stores/user'
  import tasksStore from '../stores/tasks'
  
  export default{
    
    computed:{
      ...mapStores(userStore, tasksStore)      
     },

  }
  </script>
  
  
  <style scoped>
   table, th, td {
  border: 1px solid;
  }
  </style>
  