import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', name: Home, component: Home },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    component: () => import('@/views/DestinationShow.vue'),
  },
  {
    path: '/destination/:id/:slug/:experienceSlug',
    name: 'experience.show',
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    component: () => import('@/views/ExperienceShow.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
