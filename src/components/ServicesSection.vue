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
  <div class="main-wrap long">
    <div class="container-seo">
      <TitleArea :title="section.title" :text="section.text" :textColor="'white'"/>
      <div class="row">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div  class="card text-center">
            <div class="top">
              <i :class="['icon', card.icon, (card.icon === 'fa-google' ? 'fa-brands' : 'fa-solid')]"></i>
              <h5>{{card.title}}</h5>
            </div>
            <p>{{card.text}}</p>
            <a :href="card.link.link">{{card.link.placeholder}}
              <i class="fa-solid fa-chevron-right icon-chevron"></i>
            </a>
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
}
.card {
  color: white;
  background-color: lighten($secondary-bg, 3%);
  padding: 35px;
}

.icon {
  cursor: pointer;
}

a {
  color: $primary-color;
  font-weight: 700;
  text-transform: capitalize;
  &:hover {
    color: $primary-color; 
  }
  .icon-chevron {
    font-size: 0.6rem;
  }
}

img {
  margin-top: 2rem;
}

</style>