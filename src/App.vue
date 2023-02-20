<template>
  <ion-app>
    <ion-router-outlet id="main-content"></ion-router-outlet>
    <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Trained models</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <div id="container">
        <ion-list>
          <ion-item v-for="tab in tabs" :key="tab.name" :routerLink="tab.path" routerDirection="none" lines="none" detail="false">
            <router-link class="link-style" :to="tab.path">
            <ion-icon style="padding:0 0" size="large" :icon="tab.icon" slot="start"></ion-icon>
            <ion-label style="padding:8px 0">{{ tab.name }}</ion-label>
          </router-link>
          </ion-item>
        </ion-list>
      </div>
    </ion-content>
  </ion-menu>
     <ion-content>
      <router-view />
    </ion-content>
  </ion-app>
</template>
<style>
.link-style{
  text-decoration: none;
  width:100%;
  color: black;
  display:flex;
  flex-direction: row;
  gap:15px
}
.container {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>

<script lang="ts">
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { defineComponent } from 'vue';
import '@ionic/vue/css/ionic.bundle.css';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
  },
  data(){
    return{
    tabs:[
      {
        name: "Home",
        icon: "home-outline",
        path: "/home",
      },
      {
        name: "Models",
        icon: "list-outline",
        path: "/models",
      },
      {
        name: "About",
        icon: "information-circle-outline",
        path: "/about",

      }
    ]}
  }
  
});
</script>