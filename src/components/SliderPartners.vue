<script>
import { getPathImage } from "../data/functions";
import { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

export default {
  name: "SliderPartners",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {
    partners: Array,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Autoplay],
    };
  },
  data() {
    return {
      getPathImage
    };
  },
};
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="4"
    :space-between="50"
    :autoplay="{
      delay: 2500,
      disableOnInteraction: false,
    }"
  >
    <swiper-slide v-for="(partner, index) in partners" :key="index">
      <div class="partner">
        <img
          :src="getPathImage(partner.image, 'png')"
          :alt="partner.name"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

img {
  height: 110px;
}
</style>
