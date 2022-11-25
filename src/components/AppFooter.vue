<script>
import Navbar from "./NavBar.vue";
import { menu, credits } from "../data/menu";
export default {
  name: "AppFooter",
  components: {
    Navbar,
  },
  data() {
    return {
      menu,
      credits,
    };
  },
  computed: {
    isBorder() {
      let index;
      if (
        credits.info[index] === "0" ||
        credits.info[index] === credits.info.lenght - 1
      ) {
        return true;
      }
    },
  },
};
</script>
<template>
  <footer>
    <div
      class="container-seo text-center d-flex align-items-center justify-content-center"
    >
      <img src="/logo/logo_seo_1x.png" alt="logo" />
      <Navbar :menu="menu" :isApply="false" :isAllOthers="true" />
      <ul class="d-flex">
        <li
          v-for="(item, index) in credits.info"
          :key="index"
          :class="{
            'border-item': index === 0 || index === credits.info.length - 1,
          }"
        >
        <i :class="item.icon" class="fa-solid"></i>
          <span>{{ item.text }}</span>
          <a :href="item.link.link">{{ item.link.placeholder }}</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

footer {
  background-color: $primary-bg;
  img {
    margin-bottom: 4rem;
  }
}
.container-seo {
  padding: 3rem 0;
  flex-direction: column;
}

ul {
  margin-top: 2.8rem;
}

li {
  padding: 0 0.7rem;
  border-right: 1px solid black;
  border-left: 1px solid black;
  text-transform: capitalize;
  font-size: 0.8rem;
}
.border-item {
  border-left: 0;
  border-right: 0;
}
</style>
