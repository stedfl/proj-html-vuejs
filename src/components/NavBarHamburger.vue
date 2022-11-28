<script>
import {store} from "../data/store";
export default {
  name: "NavBarHamburger",
  props: {
    menu: Array,
    isHeaderMenu: Boolean
  },
  data() {
    return {
      isAllOthers: true,
      store
    }
  }
};
</script>
<template>
  <nav v-if="store.isHamburgerMenu">
    <ul class="seo d-flex flex-column justify-content-center">
      <li v-for="(item, index) in menu" :key="index">
        <a
          v-if="
            (isHeaderMenu && item.placeholder === 'apply') ||
            (isAllOthers &&
              item.placeholder !== 'apply' &&
              item.placeholder !== 'get in touch') ||
            (!isHeaderMenu && item.placeholder === 'get in touch')
          "
          :class="[(item.placeholder === 'apply' ? 'apply' : 'others'), item.current ? 'active' : '']"
          class="menu-items text"
          :href="item.link"
          >{{ item.placeholder }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

nav {
  width: 100%;
  position: absolute;
  top: 100%;
  z-index: 997;
  background-color: white;
  ul {
    margin-bottom: 0;
    height: 100%;
    width: 100%;
  }
  li:not(:last-child) {
    width: 100%;
    padding: 1rem 0;
    text-align: center;
    &:hover {
      background-color: $primary-bg;
    }
  }
}

.seo {
  width: 100%;
}

a {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
  transition: all 0.5s;
  &:hover {
    color: $primary-color;
  }
}

header a {
  color: black;
}

.apply {
  color: $primary-color;
  padding: 0.4rem;
  border: 1px solid $primary-color;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 0.7rem;
}

.active {
  color: $primary-color;
}
</style>
