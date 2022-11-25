<script>
import {store} from '../data/store'
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
      store
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
              <h4>{{card.title}}</h4>
            </div>
            <p>{{card.text}}</p>
          </div>
        </div>
      </div>
      <img :src="store.getPathImage(section.image.path, 'jpg')" :alt="section.image.name">
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
  border: transparent;
}

img {
  margin-top: 2rem;
}

</style>