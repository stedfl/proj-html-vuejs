<script>
import {store} from '../data/store'
import TitleArea from './TitleArea.vue';
export default {
  name: 'ServicesSection',
  components: {
    TitleArea
  },
  props: {
    services: Object
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
      <TitleArea :title="services.title" :text="services.text"/>
      <div class="row row-3">
        <div v-for="(card, index) in services.cards" :key="index" class="col">
          <div  class="card text-center">
            <div class="top">
              <i :class="['icon', card.icon, (card.icon === 'fa-google' ? 'fa-brands' : 'fa-solid')]"></i>
              <h3>{{card.title}}</h3>
            </div>
            <p>{{card.text}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  color: white;
  background-color: $secondary-bg;
  background-image: url(../assets/img/pattern_background.png);
  padding-top: 2rem;
  padding-bottom: 11.2rem;
}
.card {
  background-color: lighten($secondary-bg, 3%);
  padding: 35px;
  border: transparent;
  h3 {
    margin-bottom: 1rem;
  }
}

img {
  margin-top: 2rem;
}

</style>