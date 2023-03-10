<template>
    <ion-page id="main-content">
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-back-button defaultHref="/camera"></ion-back-button>
          </ion-buttons>
          <ion-title>Prediction results</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding">
        <ion-img class="img-style" :src="photoSrc"></ion-img>
        <ion-button expand="block" color="primary" @click="onPredictClicked()">Predict</ion-button>
        <div class="results" v-if="results">
          <div class="result">
            <div class="result-label" style="color:green">Green Tomato</div>
            <div class="result-value">{{ green }}%</div>
          </div>
          <div class="result">
            <div class="result-label" style="color:red">Red Tomato</div>
            <div class="result-value">{{ red }}%</div>
          </div>
          <div class="result">
            <div class="result-label">Uncertain</div>
            <div class="result-value">{{ uncertain }}%</div>
          </div>
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
.results {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.result {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.result-label {
  font-size: 14px;
  color: #666;
}
.result-value {
  font-size: 20px;
  color: #333;
}
</style>
<script>
import { IonBackButton } from '@ionic/vue';
import { useApi } from '@/composables/useApi';
const { predict } = useApi();



export default {
  name: 'PhotoPreview',
  props: {
    photo: {
      type: String,
      required: true,
    },
  },
  components: {
    IonBackButton,

  },
  data() {
    return {
      photoSrc: '',
      imageObject:null,
      results: null,
      green:null,
      red:null,
      uncertain:null
    };
  },
  created() {
    this.imageObject = JSON.parse(this.photo);
    this.photoSrc = this.imageObject.webviewPath;

  },
  methods: {
    async onPredictClicked() {
      if(this.results) return
      try
      {
      const res = await predict(this.photoSrc);
      const greenTomato = Math.round(res['green tomato'] * 100);
      const redTomato = Math.round(res['red tomato'] * 100);
      const uncertain = Math.round(res['uncertain'] * 100);
      this.results = true;
      this.green = greenTomato
      this.red = redTomato
      this.uncertain = uncertain
      }catch(err){
        console.log(err)
      }

      
      
    },
  },
};
</script>