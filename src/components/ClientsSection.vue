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
      <div class="row">
        <!-- <div v-for="(testimonial, index) in section.testimonials" :key="index" class="testimonial"> -->
        <div class="testimonial">
          <img :src="store.getPathImage(section.testimonials[0].image, 'jpg')" :alt="section.testimonials.name" />
          <div class="text-area">
            <p>{{section.testimonials[0].opinion}}</p>
            <span class="name">{{section.testimonials[0].name}},</span>
            <span class="job">{{section.testimonials[0].job}}</span>
          </div>
        </div>
      </div>
      <div class="btn-container">
        <span class="btn-slider active"></span>
        <span class="btn-slider"></span>
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
  text-align: center;
}

.testimonial {
  width: 60%;
  margin: 0 auto;
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
    font-size: 1.1rem;
    margin: 1.8rem 0;
  }
  .name {
    text-transform: capitalize;
    font-weight: 800;
    margin-right: 0.7rem;
    font-size: 1.1rem;
  }
  .job {
    text-transform: uppercase;
    font-size: 1.1rem;
  }
}

.btn-container {
  border-bottom: 1px solid darken($primary-bg, 5%);
  padding-bottom: 4.3rem;
}

.btn-slider {
  display: inline-block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 12px;
  margin-top: 1.5rem;
  cursor: pointer;
}

.btn-slider.active {
  background-color: black;
}
</style>
