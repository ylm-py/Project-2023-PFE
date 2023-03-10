<template>
    <ion-page id="main-content">
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-back-button defaultHref="/"></ion-back-button>
                </ion-buttons>
                <ion-title>Settings</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <div class="container" style="display:flex;flex-direction: row;gap:20px">
                <ion-item>
                    <ion-label position="floating">Server URL</ion-label>
                    <ion-input type="text" v-model="serverAddress"></ion-input>
                </ion-item>
                <ion-button expand="block" color="primary" @click="saveServerAddress()">Save</ion-button>
                <!-- add delete -->
                <ion-button expand="block" color="danger" @click="deleteServerAddress()">Delete</ion-button>


            </div>
        </ion-content>
    </ion-page>
</template>
  
<style>
.img-style {
    /* add light outline on the image */
    border: 1px solid #ddd;
    /* add rounded corners */
    border-radius: 4px;
}
</style>
<script>
import { IonBackButton,IonInput } from '@ionic/vue';



export default {
    name: 'SettingsPage',
    components: {
        IonBackButton,
        IonInput

    },
    data() {
        return {
            serverAddress: localStorage.getItem("serverAddress") || "",

        };
    },
    methods: {
        saveServerAddress() {
            localStorage.setItem("serverAddress", this.serverAddress);
        },
        deleteServerAddress() {
            localStorage.removeItem("serverAddress");
            this.serverAddress = "";
        }
    }
};
</script>