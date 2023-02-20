<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>Ok</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <ion-item v-for="page in pages" :key="page.title" @click="goToPage(page)">
        {{ page.title }}
      </ion-item>
    </ion-list>
  </ion-content>
</template>
  
<script>
export default {
  data() {
    return {
      pages: [
        { title: 'Home', path: '/' },
        { title: 'ModelPage', path: '/modelPage' },
        { title: 'AllModels', path: '/allModels' }
      ]
    };
  },
  methods: {
    goToPage(page) {
      this.$router.push(page.path);
    }
  }
};
</script>