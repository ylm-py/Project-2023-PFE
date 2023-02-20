<template>
    <ion-page >
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ model?.name }}</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <div>
          <div class="primary">
            <img class="model-img" :src="require(`../assets/images/${model.image}`)" />
          </div>
          <div class="secondary" >
            <h1>{{ model?.name }}</h1>
            <p style="font-size:1.2rem">{{ model?.subtitle }}</p>
          </div>
          <div class="description">
            <p>{{ model.description }}</p>
          </div>
            
          <ion-button @click="openCamera" shape="round" size="medium" class="btn-fixed-bottom" color="dark" >
            <ion-icon size="large" name="camera-outline"></ion-icon>
          </ion-button>

        </div>
      </ion-content>
    </ion-page>
  </template>
<style>
.btn-fixed-bottom{
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 20px;
}
.model-img {
    width:100%;
    height: auto;
    object-fit: cover;
}
.description{
  margin-top: 20px;
  font-weight: 100;
  text-align: justify;
}
</style>
<script>
import { useRouter } from "vue-router";
import { IonIcon } from "@ionic/vue"


    export default{
        name: 'ModelPage',
        components: {
            IonIcon
        },
        data() {
            return {
                id: null,
                model: {
                    id: 1,
                    name: "Tomato maturity model",
                    subtitle: "Detects the maturity of tomatoes ",
                    image: "tomato.png",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl. Sed euismod, nunc vel tincidunt luctus, nunc nisl aliquam nisl, eget aliquam nisl nisl eget nisl."
                }
            }
        },
        setup() {
            const router = useRouter();
            return { router };
        },
        created(){
          this.id = this.$route.params.id;
        },
        methods: {
          openCamera(){
            this.router.push({ path: '/camera' });
          }
        },

    }
</script>