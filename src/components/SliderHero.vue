<script>
import { getPathImage } from "../data/functions";
import { Navigation, Autoplay, EffectCreative } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-creative";

export default {
  name: "SliderHero",
  props: {
    hero: Array
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Autoplay, EffectCreative],
    };
  },
  data() {
    return {
      getPathImage
    }
  }
};
</script>

<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :speed="1500"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: ['-20%', 0, -1],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :autoplay="{
      delay: 6000,
      disableOnInteraction: false,
    }"
    :loop="true"
    navigation
  >
    <swiper-slide v-for="(item, index) in hero" :key="index">
      <div :class="item.background" class="main-wrap">
        <div class="pattern">
          <div class="circles">
            <div class="container-seo h-100 pt-4 d-flex">
              <div class="hero d-flex align-items-center">
                <div class="content w-100">
                  <h1>{{ item.title }}</h1>
                  <p class="p1">{{ item.text }}</p>
                  <div class="buttons">
                    <button class="btn-seo default">buy avada now</button>
                    <button class="btn-seo contact">contact us</button>
                  </div>
                </div>
              </div>
              <div class="hero-image d-flex align-items-center">
                <img :src="getPathImage(item.image, 'png')" :alt="item.image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.main-wrap {
  position: relative;
  height: 870px;
  width: 100%;
  background-image: url(../assets/img/pattern_background.png);
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

.pattern,
.circles {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
}

.pattern {
  background-image: url(../assets/img/pattern_background.png);
}

.circles {
  background-image: url(../assets/img/lines-1.png);
  background-repeat: no-repeat;
  background-position-x: center;
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

.hero-image {
  width: 50%;
  img {
    width: 100%;
    object-fit: contain;
  }
}

p {
  padding-right: 4rem;
  margin: 1.5rem 0;
}

@media all and (max-width: 1100px) {
  .hero {
    padding-right: 0;
    padding-left: 40px;
  }
}

@media all and (max-width: 780px) {
  .hero {
    width: 60%
  }
  .hero-image {
    width: 40%; 
  }

  h1 {
    font-size: 2rem;
  }
  .p1 {
    font-size: 1rem;
    padding-right: 0;
  }

  .btn-seo.contact {
    margin-top: 1rem;
  }
}
</style>
