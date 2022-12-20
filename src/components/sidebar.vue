<template>
    <body class="bg-slate-300 drop-shadow-2xl">    

        <section>
          <userPanel/>
        </section>     

        <section>    
          <tasksData/>
        </section>
        
        <section>    
          <chart/>
        </section> 
        
        <!-- <section class="py-4">
          <task/>
        </section> -->

    </body>
 </template>
    
 <script> 

import userPanel from "./userPanel.vue";
import task from "../components/task.vue"
import chart from "../components/chart.vue"
import tasksData from "../components/tasksData.vue"
              

export default { 
  components:{ task, chart, tasksData, userPanel },
 };

 </script>  
  

    
