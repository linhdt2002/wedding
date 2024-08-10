import { createRouter, createWebHistory } from 'vue-router';
import BrideGroomPage from '../components/BrideGroomPage.vue'
import Home from "../page/Home.vue"

const routes = [
  {
    path: '/invitation/:id',
    name: 'invitation',
    component: Home
  },
  {
    path: '/bridegroom',
    name: 'admin',
    component: BrideGroomPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
