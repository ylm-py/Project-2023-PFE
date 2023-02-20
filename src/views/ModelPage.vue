<template>
    <ion-page >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ model.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <ion-button @click="() => {this.$router.push('/');}">CLICK ME</ion-button>
      </ion-content>
    </ion-page>
  </template>

<script>
import { useRouter } from "vue-router";
    export default{
        name: 'ModelPage',
        data() {
            return {
                model: {
                    id: 1,
                    name: "Tomato maturity model",
                    subtitle: "Detects the maturity of tomatoes ",
                    image: "tomato.png",
                    reference: "https://www.google.com"
                }
            }
        },
        setup() {
            const router = useRouter();
            return { router };
        },

    }
</script>