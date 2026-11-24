import About from "@/pages/About/About.vue";
import Home from "@/pages/home/Home.vue";
import ProjectDetailView from "@/pages/ProjectDetailView/ProjectDetailView.vue";
import Projects from "@/pages/Projects/Projects.vue";
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/proyectos',
      component: Projects,
      
      children: [
        {
          path: ':id',
          component: ProjectDetailView
        }

      ]
    },

    {
      path: '/sobre-mi',
      component: About
    }

  ]

})

