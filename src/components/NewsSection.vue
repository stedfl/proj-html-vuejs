<script>
import {getPathImage} from '../data/functions';
import TitleArea from "./TitleArea.vue";
export default {
  name: "NewsSection",
  components: {
    TitleArea,
  },
  props: {
    section: Object,
  },
  data() {
    return {
      getPathImage,
    };
  },
};
</script>
<template>
  <div class="main-wrap short">
    <div class="container-seo text-center">
      <TitleArea :title="section.title" :text="section.text" :textColor="'black'" />
      <div class="row row-cols-1 row-cols-md-3">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div class="card text-center mb-5 mb-md-0">
            <div class="image-container">
              <img :src="getPathImage(card.image, 'jpg')" :alt="card" />
            </div>
            <div class="text-area">
              <a :href="card.link">
                <h5>{{card.title}}</h5>
              </a>
              <span>{{card.date}}</span>
              <p>{{card.text}}</p>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-seo default">{{ section.button }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: $primary-bg;
}

.row {
  margin-bottom: 3.7rem;
  padding-top: 0;
}

.card {
  background-color: transparent;
}

.image-container {
  overflow: hidden;
  height: 255px;
  margin-bottom: 1rem;
}

img {
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 1s;
}

.card:hover img {
  transform: scale(1.1);
}

.text-area {
  h5 {
    color: $primary-color;
    font-size: 1.3rem;
  }
  span {
    font-size: 0.8rem;
  }
  p {
    margin-top: 1rem;
  }
}
</style>
