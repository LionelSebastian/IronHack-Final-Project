<template>
    <body class="bg-slate-300 h-[100vh] drop-shadow-2xl">    
        <section>
          <navbar />
        </section>  
        <section>
          <userPanel/>
        </section>

        <section>    
          <chart/>
        </section> 

        <section>    
          <tasksData/>
        </section>
        <img src="../icons/LNDteamSide.png" alt="logoSide" class="w-[200px] ml-14 mt-3">
        
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
import navbar from "./navbar.vue";
              

export default { 
  components:{ task, chart, tasksData, userPanel, navbar },
 };

 </script>  
  

    
