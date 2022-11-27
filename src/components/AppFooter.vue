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
      social
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
      <ul class="d-flex credits">
        <li
          v-for="(item, index) in credits.info"
          :key="index"
          :class="{
            'border-item': isBorder,
          }"
        >
          <i :class="item.icon" class="fa-regular icon-copyright"></i>
          <span>{{ item.text }}</span>
          <a :href="item.link.link">{{ item.link.placeholder }}</a>
        </li>
      </ul>
      <div class="social">
        <ul class="d-flex">
          <li v-for="(item, index) in social" :key="index">
            <a :href="item.link">
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
  border-right: 1px solid $grey-color;
  border-left: 1px solid $grey-color;
  text-transform: capitalize;
  font-size: 0.8rem;
  margin-right: -1px;
  color: $grey-color;
  }
  a:hover {
    color: $primary-color;
  }
  
}

a {
    color: black;
  }

.border-item {
  border-left: 0;
  border-right: 0;
}

.social ul {
  margin-top: 1.2rem;
  a:hover {
    color: $grey-color
  }
}
.icon-copyright {
  margin-right: 0.3rem;
}

.icon-social {
  margin: 0 0.7rem;
  font-size: 1.2rem;
}

.box2 {
  width: 300px;
  margin: 50px auto;
  border: 4px solid #00bfb6;
  padding: 20px;
  text-align: center;
  font-weight: 900;
  color: #00bfb6;
  font-family: arial;
  position: relative;
}


</style>
