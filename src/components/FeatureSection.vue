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
      <div class="row">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div  class="card text-center">
            <div class="top">
              <i class="fa-solid icon" :class="card.icon"></i>
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

img {
  margin-top: 2rem;
}

</style>