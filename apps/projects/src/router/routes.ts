import type { RouteRecordRaw } from 'vue-router';
import HomeViewVue from '@/views/HomeView.vue';

const routes: RouteRecordRaw[] = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeViewVue,
  //   meta: {
  //     name: 'Home',
  //     navigable: true,
  //     href: '/',
  //   },
  // },
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
];

export default routes;