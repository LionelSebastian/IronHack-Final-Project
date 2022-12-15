<template>
    <body class=" flex mx-2">
        <div class=" flex-col bg-blue-100"> 
            <RouterLink to="/dashboard/user"  >usuario</RouterLink>
            <img src="../../public/Ironhack_logologo.png" alt="">
            <RouterLink to="/dashboard/tasks"  >tareas</RouterLink>
            <img src="../../public/favicon.ico" alt="">
            <RouterLink to="/dashboard/contact"  >contacto</RouterLink>
            <img src="../../public/Ironhack_logologo.png" alt="">
        </div>
    </body>
 </template>
    
 <script> 
    import { RouterLink } from 'vue-router'

    export default{ 
 
    }
 </script>
    
    
 <style scoped>
     
 </style>
    