<script>
  import { clients } from '../data/main-components';
  import { Navigation, Pagination, A11y } from 'swiper';
  import {store} from '../data/store';
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  
  export default {
    name: 'SliderClients',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      testimonials: Array
    },
    setup() {

      return {

        modules: [Navigation, Pagination, A11y],
      };
    },
    data() {
      return {
        clients,
        store
      }
    }
  };
</script>




<template>
  <swiper
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    :pagination="{ clickable: true }"
    @swiper="onSwiper"
    @slideChange="onSlideChange"
  >
    <swiper-slide v-for="(testimonial, index) in testimonials " :key="index"> 
      <div class="testimonial">
        <img :src="store.getPathImage(testimonial.image, 'jpg')" :alt="testimonial.name" />
        <div class="text-area">
          <p>{{testimonial.opinion}}</p>
          <span class="name">{{testimonial.name}},</span>
          <span class="job">{{testimonial.job}}</span>
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

