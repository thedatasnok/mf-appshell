import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

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
      children: routes,
    },
  ],
});

export default router;
