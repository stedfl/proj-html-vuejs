<script>
import {store} from '../data/store'
import TitleArea from './TitleArea.vue';
export default {
  name: 'PlansSection',
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
              <h3>{{card.title}}</h3>
            </div>
            <p>{{card.text}}</p>
          </div>
        </div>
      </div>
      <!-- <img :src="store.getPathImage(section.image.path, 'jpg')" :alt="section.image.name"> -->
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  background-image: url(../assets/img/background1.jpg);
  background-size: cover;
  min-height: 900px;
}
.card {
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