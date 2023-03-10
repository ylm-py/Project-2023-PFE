<template>
  <ion-page id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button></ion-menu-button>
        </ion-buttons>
        <ion-title>Trained models</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div id="container">
        <ModelCard v-for="model in models" :key="model.id" :model="model" />
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import ModelCard from "../components/ModelCard.vue";
import { useRouter } from "vue-router";


export default {
  name: 'allModels',
  components: {
    ModelCard
  },
  data() {
    return {
      models: [
        {
          id: 1,
          name: "Tomato maturity model",
          subtitle: "Detects the maturity of tomatoes ",
          image: "tomato.png",
          reference: "https://www.google.com"
        },
        {
          name: "Object detection model",
          subtitle: "Detects objects in images",
          image: "objects.png",
          reference: "https://www.google.com" 
        },
        {
          name: "Plant disease detection model",
          subtitle: "Detects diseases in plants",
          image: "plants.png",
          reference: "https://www.google.com"
        }
      ]
    }
  },
  setup() {
    const router = useRouter();
    return { router };
  },
}


</script>

<style scoped>
#container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
</style>