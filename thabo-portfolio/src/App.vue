<template>
  <Navbar />
  <router-view />
  <MyFooter />
  
</template>

<script>
import Navbar from './components/Navbar.vue';
import MyFooter from './components/MyFooter.vue';

export default {
  components: {
    Navbar,
    MyFooter
  }
}
</script>

<style>
/* #app{
  min-height: 100%;
} */
</style>
