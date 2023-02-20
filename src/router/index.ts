import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import CameraPage from '../views/CameraPage.vue'
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
      default: AllModels
    }
  },
  {
    path: '/model/:id',
    name: 'Model',
    components: {
      default: ModelPage
    }
  },
  {
    path: '/all-models',
    name: 'All Models',
    components: {
      default: AllModels,
      sidebar: SideBar
    }
  },
  {
    path: '/camera',
    name: 'CameraPage',
    components: {
      default: CameraPage
    }
  }
]

const router = createRouter({ 
  history: createWebHistory('/'),
  routes
})

export default router
