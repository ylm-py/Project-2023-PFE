<template>
    <ion-card class="card">
        <img class="model-img" alt="Silhouette of mountains" :src="require(`../assets/images/${model.image}`)" />
        <ion-card-header style="margin-bottom:50px">
            <ion-card-title>{{ model.name }}</ion-card-title>
            <ion-card-subtitle>{{ model.subtitle }}</ion-card-subtitle>
        </ion-card-header>

        <div class="footer">
            <ion-button @click="redirect" expand="block" fill="clear">Explore</ion-button>

        </div>

    </ion-card>
</template>
<style>
.card .footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
}
.model-img {
    width:100%;
    height: auto;
    object-fit: cover;
}

.card {
   /* make 2 items in row  */
    width: calc(50% - 10px);
    margin:5px;

}



</style>
<script>
import { useRouter } from 'vue-router';
export default {
    name: 'ModelCard',
    props: {
        model: {
            type: Object,
            required: true
        }
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
    redirect(){
        // send with props as model
        this.router.push({path:`/model/${this.model.id}`, model: JSON.stringify(this.model)})
    }
}
}
</script>