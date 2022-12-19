import { createRouter, createWebHistory } from 'vue-router'

import Dashboard from "../views/Dashboard.vue"
import Auth from "../views/Auth.vue"
import tasks from "../components/tasks.vue"
import user from "../components/user.vue"
import contact from "../components/contact.vue"
import SignUp from "../components/SignUp.vue"
import SignIn from "../components/SignIn.vue"
import archived from "../components/archived.vue"
import archived from "../components/archived.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name:"Auth",
      path: "/" ,
     component: Auth,
     children: [
       {
       name: "SignIn",
       path: "/",
         component: SignIn,
       },
      {
      name: "SignUp",
      path: "/signup",
        component: SignUp,
      },
    ]
    }, 
    { name:"Dashboard",
      path: "/dashboard" ,
      component: Dashboard,
      
      children: [
        { name:"Tasks",
          path: "/dashboard/tasks",
          component: tasks,
         },

        { name:"User-control-panel",
          path: "/dashboard/user",
          component: user,
        },
        
         { name:"Contact-Us", 
           path: "/dashboard/contact",
           component: contact,
         },

         { name:"Archived-Tasks",
           path: "/dashboard/archived",
           component: archived,
      },
      ],
   }, 
  ],
});

export default router
