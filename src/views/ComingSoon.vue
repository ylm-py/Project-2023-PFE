<template>
    <!-- Coming soon page -->
    <ion-page>
        <ion-header>
            <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/"></ion-back-button>
          </ion-buttons>
          <ion-title>Coming soon</ion-title>
        </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div>
                <img src="../assets/images/coming-soon.jpg" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script>

import { IonIcon,IonBackButton } from "@ionic/vue"
import { useRouter } from "vue-router";
export default {
    name: 'ComingSoon',
    components: {
        IonBackButton
    },
    setup() {
        const router = useRouter();
        return { router };
    },
}
</script>