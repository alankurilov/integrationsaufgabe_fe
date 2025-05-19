import { createRouter, createWebHistory } from 'vue-router';
import Registrtion from '../components/Registration.vue';
import Home from '../components/Home.vue';
import Admin from '../components/Admin.vue'
const routes = [
  { path: '/', name: 'Registration', component: Registrtion},
  { path: '/home', name: 'Home', component: Home},
  { path: '/admin', name: 'Admin', component: Admin},
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
