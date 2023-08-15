import { createRouter, createWebHistory } from 'vue-router'
const HomeView = () => import('../views/HomeView.vue')
const ResumePreview = () => import('../views/ResumePreview.vue')
const ResumeBuilder = () => import('../views/ResumeBuilder.vue')
const AboutView = () => import('../views/AboutView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/builder',
      name: 'builder',
      component: ResumeBuilder
    },
    {
      path: '/preview',
      name: 'preview',
      component: ResumePreview
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    }
  ]
})

export default router
