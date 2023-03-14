import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

declare module 'vue-router' {
  interface RouteMeta {
    name: string;
    navigable: boolean;
    href: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        name: 'Home',
        navigable: true,
        href: '/',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/ProjectsView.vue'),
      meta: {
        name: 'Projects',
        navigable: true,
        href: '/projects',
      },
    },
  ],
});

export default router;
