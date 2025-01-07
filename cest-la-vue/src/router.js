import { createRouter, createWebHistory } from 'vue-router'

import HomePage from './views/HomePage.vue'
import LoginPage from './views/LoginPage.vue'
import UsersPage from './views/UsersPage.vue'
import DashboardPage from './views/DashboardPage.vue'
import UserPage from './views/UserPage.vue'
import UserFeed from './components/UserFeed.vue'
import UserLikes from './components/UserLikes.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/login', component: LoginPage },
  { path: '/users', component: UsersPage },
  {
    path: '/users/:userId', component: UserPage, children: [
      { path: 'feed', component: UserFeed },
      { path: 'likes', component: UserLikes }
    ],
  },
  { path: '/dashboard', component: DashboardPage }
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})