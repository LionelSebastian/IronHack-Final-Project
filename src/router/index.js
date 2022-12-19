import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Auth from "../views/Auth.vue"
import tasks from "../components/tasks.vue"
import user from "../components/user.vue"
import contact from "../components/contact.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name:"Auth",
      path: "/" ,
     component: Auth,
    }, 
    { name:"Dashboard",
      path: "/dashboard" ,
      component: Dashboard,
      
      children: [
        { name:"Tasks",
          path: "/tasks",
            component: tasks,
         },

        { path: "/dashboard/user",
             component: user,
        },
        
         { path: "/dashboard/contact",
            component: contact,
         },
      ],
   }, 
  ],
});

export default router
