import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import sourceData from '@/data.json';

const routes = [
  { path: '/', name: Home, component: Home },
  {
    path: '/destination/:id/:slug',
    name: 'destination.show',
    props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
    component: () => import('@/views/DestinationShow.vue'),
    beforeEnter: (to, from) => {
      const exists = sourceData.destinations.find(
        (destination) => destination.id === parseInt(to.params.id)
      );

      if (!exists)
        return {
          name: 'NotFound',
          // allows keeping the URL while rendering a different page
          params: { pathMatch: to.path.split('/').slice(1) },
          query: to.query,
          hash: to.hash,
        };
    },
    children: [
      {
        path: ':experienceSlug',
        name: 'experience.show',
        props: (route) => ({ ...route.params, id: parseInt(route.params.id) }),
        component: () => import('@/views/ExperienceShow.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // if there's a saved position then return it
    // otherwise return top: 0 to back to the top of page
    return (
      savedPosition ||
      new Promise((resolve) => {
        setTimeout(() => resolve({ top: 0, behavior: 'smooth' }), 400);
      })
    );
  },
});

export default router;
