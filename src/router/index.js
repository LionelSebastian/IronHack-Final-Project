import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Auth from "../views/Auth.vue"
import tasks from "../components/tasks.vue"
import user from "../components/user.vue"
import contact from "../components/contact.vue"
import SignUp from "../components/SignUp.vue"
import SignIn from "../components/SignIn.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name:"Auth",
      path: "/" ,
     component: Auth,
     children: [
       {
       name: "SignIn",
       path: "",
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
        { path: "/dashboard/user",
             component: user,
        },
        { path: "/dashboard/tasks",
            component: tasks,
         },
         { path: "/dashboard/contact",
            component: contact,
         },
      ],
   }, 
  ],
});

export default router
