<script>
// import {store} from '../data/store';
export default {
  name: 'AppHeader',
  props: {
    menu: Array
  },
  data() {
    return {
      // store,
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
  <div class="container">
    <header class="d-flex justify-content-between align-items-center py-5">
      <div class="logo">
        <img :src="getPathImage('logo_seo_1x')" alt="logo">
      </div>
      <nav class="d-flex align-items-center">
        <ul class="d-flex align-items-center">
          <li>
            <a  v-for="(item, index) in this.menu" :key="index" :class="{'link': item === 'apply'}" class="mx-3 text-capitalize" href="#">{{item}}</a>
          </li>
        </ul>
      </nav>
      <button>get in touch now</button>
      
    </header>
  </div>
  
  
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;
.link {
  color: $primary-color;
}

img {
  vertical-align: middle;
}

button {
  background-color: $primary-color;
}

ul {
  height: 100%;
}

li:hover {

}

</style>