<script>
import { store } from "../data/store";
import TitleArea from "./TitleArea.vue";
export default {
  name: "ClientsSection",
  components: {
    TitleArea,
  },
  props: {
    section: Object,
  },
  data() {
    return {
      store,
    };
  },
};
</script>
<template>
  <div class="main-wrap short">
    <div class="container-seo text-center">
      <TitleArea :title="section.title" :text="section.text" :textColor="'black'" />
      <div class="row row-cols-3">
        <div v-for="(testimonial, index) in section.testimonials" :key="index" class="testimonial">
          <img :src="store.getPathImage(testimonial.image, 'jpg')" :alt="testimonial.name" />
          <div class="text-area">
            <p>{{testimonial.opinion}}</p>
            <span>{{testimonial.name}}</span>
            <span>{{testimonial.job}}</span>
          </div>
        </div>
        
      </div>
    </div>
  </div>

  
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: white;
}

.title-section {
  padding-bottom: 3.1rem;
}

.row {
  margin-bottom: 3.7rem;
  padding-top: 0;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.text-area {
  p {
    font-style: italic;
  }
}
</style>
