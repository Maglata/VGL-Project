import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

import ReviewsPage from './view/ReviewsPage.vue'
import HeroPageView from './view/HeroPageView.vue'

const routes = [
  { path: '/reviews', component: ReviewsPage },
  { path: '/', component: HeroPageView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App)
  .use(router)
  .mount('#app')
