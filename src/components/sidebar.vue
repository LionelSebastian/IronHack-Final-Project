<template>
    <body class=" justify-between bg-slate-300  py-6 px-3 min-h-full w-1/4">    

        <section>
          <userPanel/>
        </section>
        <section>    
          <chart/>
        </section> 
        <section>    
          <tasksData/>
        </section>
        <section class="py-4">
          <task/>
        </section>

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
  

    
