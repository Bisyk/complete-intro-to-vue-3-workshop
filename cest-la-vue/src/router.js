import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import UsersPage from './views/UsersPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/users', component: UsersPage },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})