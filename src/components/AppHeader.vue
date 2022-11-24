<script>
// import {store} from '../data/store';
import Navbar from './NavBar.vue'
import {menu} from '../data/menu';
import {hero} from '../data/main-components';
export default {
  name: 'AppHeader',
  components: {
    Navbar
 
  },
  data() {
    return {
      // store,
      menu,
      hero
    }
  },
  methods: {
    getPathImage(imageName) {
      return new URL (`../assets/img/${imageName}.png`, import.meta.url).href;
    }
  }

}
</script>
<template>
 
<div class="main-wrap">
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-4">
      <div class="logo">
        <img src="/logo/logo_seo_w_1x.png" alt="logo">
      </div>
      <div class="right d-flex">
        <Navbar :menu="menu" />
        <button class="btn-seo header">get in touch now</button>
      </div>
    </header>
    <div class="hero">
      <h1>{{}}</h1>
      <p></p>
    </div>
  </div>
</div>
  
  
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  background-image: url(../assets/img/1-hero-image.png);
  background-size: cover;
  background-position-x: right;
  height: 870px;
  width: 100%;
}

.btn-seo.header {
  margin-left: 3rem;
  margin-right: 5rem;
  font-size: 0.8rem;
}

</style>