<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/model/1"></ion-back-button>
          </ion-buttons>
          <ion-title>Photo gallery</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col size="6" v-for="photo in photos" :key="photo">
            <ion-img :src="photo.webviewPath" @click="showActionSheet(photo)"></ion-img>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto()">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  actionSheetController,
  IonContent,
  IonCol,
  IonFab,
  IonFabButton,
  IonGrid,
  IonPage,
  IonHeader,
  IonIcon,
  IonImg,
  IonRow,
  IonTitle,
  IonToolbar,
  IonBackButton,
} from '@ionic/vue';
import { ref } from 'vue'
import { camera, trash, close,imageOutline } from 'ionicons/icons';
import { usePhotoGallery, UserPhoto } from '@/composables/usePhotoGallery';
const { photos, takePhoto, deletePhoto,navigateToNewPage } = usePhotoGallery();
const showActionSheet = async (photo: UserPhoto,selectedPhoto:UserPhoto) => {
  console.log('photo : ',photo)
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Predict',
        icon: imageOutline,
        role: 'predict',
        handler: () => {
          navigateToNewPage(photo)
        },
      },
      {
        text: 'Delete',
        role: 'destructive',
        icon: trash,
        handler: () => {
          deletePhoto(photo);
        },
      },
      {
        text: 'Cancel',
        icon: close,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  });
  await actionSheet.present();
  selectedPhoto = photo;

  console.log('selected photo : ',selectedPhoto)

};
</script>