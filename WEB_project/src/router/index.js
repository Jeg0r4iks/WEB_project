import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue'; // Создайте файл `HomeView.vue`, если его еще нет

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
