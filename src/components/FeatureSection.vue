<script>
import {getPathImage} from '../data/functions';
import TitleArea from './TitleArea.vue';
export default {
  name: 'FeatureSection',
  components: {
    TitleArea
  },
  props: {
    section: Object
  },
  data() {
    return {
      getPathImage
    }
  }
}
</script>
<template>
  <div class="main-wrap">
    <div class="container-seo">
      <TitleArea :title="section.title" :text="section.text" :textColor="'black'"/>
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div  class="card text-center mb-5 mb-md-0">
            <div class="top">
              <a href="#">
                <i class="fa-solid icon" :class="card.icon"></i>
              </a>
              <h3>{{card.title}}</h3>
            </div>
            <p>{{card.text}}</p>
          </div>
        </div>
      </div>
      <img :src="getPathImage(section.image.path, 'jpg')" :alt="section.image.name">
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  background-color: $primary-bg;
}
.card {
  padding: 35px;
}

h3:hover {
  color: $primary-color;
}

img {
  margin-top: 2rem;
  width: 100%;
}
</style>