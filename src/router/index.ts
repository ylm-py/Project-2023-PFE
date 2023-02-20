import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'
import ModelPage from '../views/ModelPage.vue'
import AllModels from '../views/AllModels.vue'
import SideBar from '../components/SideBar.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    components: {
      default: AllModels,
      sidebar: SideBar
    }
  },
  {
    path: '/model/:id',
    name: 'Model',
    components: {
      default: ModelPage,
      sidebar: SideBar
    }
  },
  {
    path: '/all-models',
    name: 'All Models',
    components: {
      default: AllModels,
      sidebar: SideBar
    }
  }
]

const router = createRouter({ 
  history: createWebHistory('/'),
  routes
})

export default router
