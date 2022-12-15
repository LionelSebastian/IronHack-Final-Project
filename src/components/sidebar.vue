<template>
    <body class=" flex min-h-full">
        <div class=" flex-col bg-blue-100 py-6 px-3"> 
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
    
