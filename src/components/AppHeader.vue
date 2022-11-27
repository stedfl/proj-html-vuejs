<script>
import Navbar from "./NavBar.vue";
import { menu } from "../data/menu";
export default {
  name: "AppHeader",
  components: {
    Navbar,
  },
  data() {
    return {
      menu,
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
        <img src="/logo/logo_seo_w_1x.png" alt="logo" />
      </div>
      <div class="right d-flex">
        <Navbar :menu="menu" :isApply="true" :isAllOthers="true" />
        <button class="btn-seo default">get in touch now</button>
      </div>
    </header>
  </div>
    
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

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
</style>
