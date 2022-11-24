<script>
// import {store} from '../data/store';
export default {
  name: "NavBar",
  props: {
    menu: Array,
  },
  data() {
    return {
      // store,
    };
  },
  methods: {
    getPathImage(imageName) {
      return new URL(`../assets/img/${imageName}.png`, import.meta.url).href;
    },
  },
};
</script>
<template>
  <nav class="d-flex align-items-center">
    <ul class="seo d-flex align-items-center">
      <li v-for="(item, index) in this.menu" :key="index">
        <a
          :class="{ apply: item === 'apply' }"
          class="menu-items text"
          href="#"
          >{{ item }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.apply {
  color: $primary-color;
  padding: 0.4rem;
  border: 1px solid $primary-color;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 0.7rem;
  margin-left: -25px;
}

ul.seo {
  height: 100%;
  margin: 0;
}

li {
  margin-left: 2rem;
}

a {
  font-size: 0.9rem;
  color: white;
  font-weight: 500;
  text-transform: capitalize;
  &:hover {
    color: $primary-color;
  }
}
.apply {
}

li:hover {
}
</style>
