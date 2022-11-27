<script>
import { getPathImage } from "../data/functions";
import { hero } from "../data/main-components";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default {
  name: "SliderHero",
  components: {
    Swiper,
    SwiperSlide,
  },
  props: {},
  setup() {
    return {
      modules: [Navigation, Pagination],
      getPathImage
    };
  },
  data() {
    return {
      hero
    };
  },
};
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
  >
    <swiper-slide v-for="(item, index) in hero" :key="index">
      <div :class="item.background" class="main-wrap">
        <div class="container-seo h-100 pt-4 d-flex">
          <div class="hero d-flex align-items-center">
            <div class="content w-100">
              <h1>{{ item.title }}</h1>
              <p class="p1">{{item.text }}</p>
              <div class="buttons">
                <button class="btn-seo default">buy avada now</button>
                <button class="btn-seo contact">contact us</button>
              </div>
            </div>
          </div>
          <div class="img-container d-flex align-items-center">
            <img :src="getPathImage(item.image, 'png')" :alt="item.image">
          </div>
        </div>
      </div>

      
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.main-wrap {
  height: 870px;
  width: 100%;
}

.main-wrap.hero-1 {
  background-image: linear-gradient(to bottom right, #321b5b, #833459, #fe9c48);
}

.main-wrap.hero-2 {
  background-image: linear-gradient(to bottom right, #4f01bc, #0aa9e2);
}

.main-wrap.hero-3 {
  background-image: linear-gradient(to bottom right, #090e7c, #9f39fc);
}

.hero {
  height: calc(100% - 60px);
  width: 50%;
  color: white;
  .btn-seo {
    margin-right: 1.5rem;
  }
  .btn-seo.contact {
    background-color: $secondary-color;
    border: 1px solid $secondary-color;
    &:hover {
      background-color: lighten($secondary-color, 5%);
    }
  }
}
p {
  padding-right: 4rem;
  margin: 1.5rem 0;
}

.image-container {
  width: 50%;
  img {
    width: 60%;
    object-fit: cover;
  }
}
</style>
