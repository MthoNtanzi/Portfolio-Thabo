<template>
  <Navbar />
  <div class="router-container">
    <router-view />
  </div>
  
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


