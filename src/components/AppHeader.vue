<script>
import Navbar from "./NavBar.vue";
import NavBarHamburger from "./NavBarHamburger.vue";
import {store} from "../data/store";
import { menu } from "../data/menu";
export default {
  name: "AppHeader",
  components: {
    Navbar,
    NavBarHamburger
  },
  data() {
    return {
      menu,
      store,
    };
  },
};
</script>
<template>
  <div class="container-seo">
    <header
      id="header"
      class="d-flex justify-content-between align-items-center"
    >
      <div class="logo">
        <a href="#">
          <img src="/logo/logo_seo_w_1x.png" alt="logo" />
        </a>
      </div>
      <div class="right d-flex">
        <Navbar :menu="menu" :isHeaderMenu="true" />
        <button class="btn-seo default">get in touch now</button>
      </div>
      <div @click="store.isHamburgerMenu=!store.isHamburgerMenu" class="hamburger">
          <i v-if="!store.isHamburgerMenu" class="fa-solid fa-bars"></i>
          <i v-else class="fa-solid fa-xmark"></i>
      </div>
      <NavBarHamburger :menu="menu" :isHeaderMenu="true" />
    </header>
    
  </div>
    
</template>

<style lang="scss" scoped>

.container-seo {
  position: relative;

}

header {
  position: absolute;
  z-index: 999;
  height: 60px;
  width: 100%;
  padding-top: 2rem;
  .btn-seo {
    margin-left: 3rem;
    margin-right: 5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
  }
}

.hamburger {
  display: none;
  height: 100%;
  width: 40px;
  background-color: white;
  text-align: center;
  cursor: pointer;
}


@media all and (max-width: 1100px) {
  .hamburger {
    display: block;
  }
}
</style>
