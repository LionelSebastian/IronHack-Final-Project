import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from "../views/Dashboard.vue"
import Auth from "../views/Auth.vue"
import user from "../components/user.vue"
import tasks from "../components/tasks.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { name:"Auth",
      path: "/" ,
     component: Auth,
    }, 
    { name:"Dashboard",
      path: "/Dashboard" ,
      component: Dashboard,
      children: [
        { path: "/user",
          component: user,
        },
        { path: "/tasks",
        component: tasks,
      },
      ],
   }, 
  ],
});

export default router
