<script>
import {store} from '../data/store'
import TitleArea from './TitleArea.vue';
export default {
  name: 'ServicesSection',
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
      <TitleArea :title="section.title" :text="section.text" :textColor="'white'"/>
      <div class="row">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div  class="card text-center">
            <div class="top">
              <i :class="['icon', card.icon, (card.icon === 'fa-google' ? 'fa-brands' : 'fa-solid')]"></i>
              <h4>{{card.title}}</h4>
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
  background-color: $secondary-bg;
  background-image: url(../assets/img/pattern_background.png);
  padding-bottom: 11.2rem;
}
.card {
  color: white;
  background-color: lighten($secondary-bg, 3%);
  padding: 35px;
  border: transparent;
}

img {
  margin-top: 2rem;
}

</style>