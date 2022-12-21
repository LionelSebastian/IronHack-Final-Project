<template>
    <body class="bg-slate-300 drop-shadow-2xl">    

        <section>
          <userPanel/>
        </section>

        <section>    
          <chart/>
        </section> 

        <section>    
          <tasksData/>
        </section>
        <img src="../icons/LNDteamSide.png" alt="logoSide" class="w-[200px] ml-14 mt-12">
        
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
  

    
