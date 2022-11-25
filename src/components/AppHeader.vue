<script>
import Navbar from "./NavBar.vue";
import { menu } from "../data/menu";
import { hero } from "../data/main-components";
export default {
  name: "AppHeader",
  components: {
    Navbar,
  },
  data() {
    return {
      menu,
      hero,
    }
  }
};
</script>
<template>
  <div class="main-wrap">
    <div class="container-seo h-100 pt-4">
      <header class="d-flex justify-content-between align-items-center">
        <div class="logo">
          <img src="/logo/logo_seo_w_1x.png" alt="logo" />
        </div>
        <div class="right d-flex">
          <Navbar :menu="menu" :isApply="true" :isAllOthers="true"/>
          <button class="btn-seo default">get in touch now</button>
        </div>
      </header>
      <div class="hero d-flex align-items-center">
        <div class="content w-100">
          <h1>{{ this.hero.title }}</h1>
          <p class="p1">{{ this.hero.text }}</p>
          <div class="buttons">
            <button class="btn-seo default">buy avada now</button>
            <button class="btn-seo contact">contact us</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

header {
  height: 60px;
  .btn-seo {
    margin-left: 3rem;
    margin-right: 5rem;
    padding: 0.5rem 1.5rem;
    border-radius: 20px;
  }
}

.main-wrap {
  background-image: url(../assets/img/1-hero-image.png);
  background-size: cover;
  background-position-x: right;
  height: 870px;
  width: 100%;
}

.hero {
  height: calc(100% - 60px);
  width: 50%;
  color: white;
  .btn-seo {
    margin-right: 1.5rem;
  }
  .btn-seo.contact {
    background-color: $secondary-color;
    border: 1px solid $secondary-color;
    &:hover {
      background-color: lighten($secondary-color, 5%);
    }
  }
}
p {
  padding-right: 4rem;
  margin: 1.5rem 0;
}
</style>
