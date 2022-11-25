<script>
import Navbar from "./NavBar.vue";
import { menu } from "../data/menu";
export default {
  name: 'AppFooter',
  components: {
    Navbar
  },
  data() {
    return {
      menu
    }
  }

}
</script>
<template>
  <footer>
    <div class="container-seo text-center">
      <img src="/logo/logo_seo_1x.png" alt="logo">
      <Navbar :menu="menu" :isAllOthers="true"/>
    </div>
  </footer>
  
</template>



<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer {
  background-color: $primary-bg;
}
.container-seo {
  padding: 3rem 0;
}

</style>