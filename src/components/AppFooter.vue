<script>
import Navbar from "./NavBar.vue";
import { menu, credits, social } from "../data/menu";
export default {
  name: "AppFooter",
  components: {
    Navbar,
  },
  data() {
    return {
      menu,
      credits,
      social,
      socialIndex: null,
    };
  },
};
</script>
<template>
  <footer>
    <div
      class="container-seo text-center d-flex align-items-center justify-content-center"
    > 
      <a href="#">
        <img src="/logo/logo_seo_1x.png" alt="logo" />
      </a>
      <Navbar :menu="menu" :isHeaderMenu="false" />
      <ul class="d-flex credits">
        <li
          v-for="(item, index) in credits.info"
          :key="index"
          :class="[(index === 0) || (index === (credits.info.length - 1)) ? 'no-border' : 'border-item']"
        >
          <i :class="item.icon" class="fa-regular icon-copyright"></i>
          <span>{{ item.text }}</span>
          <a :href="item.link.link">{{ item.link.placeholder }}</a>
        </li>
      </ul>
      <div class="social">
        <ul class="d-flex">
          <li v-for="(item, index) in social" :key="index">
            <div v-if="socialIndex === index" class="social-name">
              {{ item.placeholder }}
            </div>
            <a
              @mouseenter="socialIndex = index"
              @mouseleave="socialIndex = null"
              :href="item.link"
            >
              <i :class="item.icon" class="fa-brands icon-social"></i>
            </a>
          </li>
        </ul>
      </div>
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
  padding: 3rem 0 2.5rem;
  flex-direction: column;
}

ul.credits {
  margin-top: 2.8rem;
  li {
    padding: 0 0.5rem;
    text-transform: capitalize;
    font-size: 0.8rem;
    margin-right: -1px;
    color: $grey-color;
  }
  a:hover {
    color: $primary-color;
  }
  .icon-copyright {
    margin-right: 0.3rem;
  }
}

a {
  color: black;
}

.no-border {
  border-left: 0;
  border-right: 0;
}

.border-item {
  border-right: 1px solid $grey-color;
  border-left: 1px solid $grey-color;
}

.social ul {
  margin-top: 1.2rem;
  li {
    position: relative;
    display: flex;
    justify-content: center;
  }
  a:hover {
    color: $grey-color;
  }
}

.social-name {
  font-size: 0.7rem;
  color: white;
  text-transform: capitalize;
  background-color: black;
  border-radius: 8px;
  padding: 5px;
  position: absolute;
  z-index: 995;
  bottom: 100%;
}

.icon-social {
  margin: 0 0.7rem;
  font-size: 1.2rem;
}
</style>
