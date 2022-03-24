<template>
  <q-layout view="lHh LpR lFf">
    <Header/>
    <q-page-container>
      <router-view />
    </q-page-container>
    <side-bar></side-bar>
  </q-layout>
</template>
<script>
import Header from './components/header/Header.vue';
import SideBar from './components/sidebar/SideBar.vue';

export default {
  
  components:{
    Header,
    SideBar
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans&family=Poppins&family=Roboto&display=swap');
#app {
  font-family: 'PT Sans',sans-serif;
}
</style>
