<script>
import { getPathImage } from "../data/functions";
import { EffectFade, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default {
  name: "SliderTestimonials",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    testimonials: Array,
  },
  setup() {
    return {
      modules: [EffectFade, Pagination, Autoplay],
    };
  },
  data() {
    return {
      getPathImage,
    };
  },
};
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
    :effect="'fade'"
    :fadeEffect="{
      crossFade: true,
    }"
    :pagination="{ clickable: true }"
  >
    <swiper-slide v-for="(testimonial, index) in testimonials" :key="index">
      <div class="testimonial">
        <img
          :src="getPathImage(testimonial.image, 'jpg')"
          :alt="testimonial.name"
        />
        <div class="text-area">
          <p>{{ testimonial.opinion }}</p>
          <span class="name">{{ testimonial.name }},</span>
          <span class="job">{{ testimonial.job }}</span>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
.testimonial {
  width: 60%;
  margin: 0 auto 3rem;
}

img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
}

.text-area {
  letter-spacing: 2px;
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
</style>
