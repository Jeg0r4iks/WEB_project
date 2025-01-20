import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';  
import HistoryView from '../views/HistoryView.vue'; 
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6e19c3e (added new views to the navbar)
import RunwayView from '../views/RunwayView.vue';
import StyleView from '../views/StyleView.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
<<<<<<< HEAD
=======

const routes = [
  {
>>>>>>> bc58c74 (added new views to navbar)
=======
>>>>>>> 6e19c3e (added new views to the navbar)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> 6e19c3e (added new views to the navbar)
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
<<<<<<< HEAD
=======
>>>>>>> bc58c74 (added new views to navbar)
=======
>>>>>>> 6e19c3e (added new views to the navbar)
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
