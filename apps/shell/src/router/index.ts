import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
//@ts-ignore
import projectsRoutes from 'projects/routes';

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
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/ProfileView.vue'),
      meta: {
        name: 'Profile',
        navigable: true,
        href: '/profile',
      },
    },
    {
      path: '/projects',
      name: 'projects',
      // @ts-ignore
      children: projectsRoutes.map((route) => ({
        ...route,
        path: route.path.replace('/', ''),
        meta: { ...route.meta, href: `/projects${route.meta.href}` },
      })),
    },
  ],
});

export default router;
