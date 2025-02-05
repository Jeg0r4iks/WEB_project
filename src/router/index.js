import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';  
import HistoryView from '../views/HistoryView.vue'; 
import RunwayView from '../views/RunwayView.vue';
import StyleView from '../views/StyleView.vue';
import LoginView from '../views/LoginView.vue';

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/history',
    name: 'history',
    component: HistoryView
  }, 
  {
    path: '/runway', 
    name: 'runway', 
    component: RunwayView
  }, 
  {
    path: '/style', 
    name: 'style', 
    component: StyleView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
