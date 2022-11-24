<script>
import {store} from '../data/store'
import TitleArea from './TitleArea.vue';
export default {
  name: 'OurWorkSection',
  components: {
    TitleArea
  },
  props: {
    ourWork: Object
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
      <TitleArea :title="ourWork.title" :text="ourWork.text"/>
      <div class="row">
        <div v-for="(card, index) in ourWork.cards" :key="index" class="col">
          <div  class="card text-center">
            <img :src="store.getPathImage(card, 'jpg')" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  background-color: $primary-bg;
  background-image: url(../assets/img/pattern_background.png);
  padding-top: 2rem;
  padding-bottom: 11.2rem;
}

  h3 {
    margin-bottom: 1rem;
  }


img {
  margin-top: 2rem;
}

</style>