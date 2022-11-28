<script>
import { getPathImage } from "../data/functions";
import TitleArea from "./TitleArea.vue";
export default {
  name: "OurWorkSection",
  components: {
    TitleArea,
  },
  props: {
    section: Object,
  },
  data() {
    return {
      getPathImage,
      showLink: null,
    };
  },
};
</script>
<template>
  <div class="main-wrap short">
    <div class="container-seo text-center">
      <TitleArea
        :title="section.title"
        :text="section.text"
        :textColor="'black'"
      />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div
            @mouseenter="showLink = index"
            @mouseleave="showLink = null"
            class="card text-center"
          >
            <img :src="getPathImage(card, 'jpg')" :alt="card" />
            <transition name="fade">
              <div
                v-if="showLink === index"
                class="link justify-content-center align-items-center"
              >
                <a :href="section.hover.link">
                  <i class="fa-solid icon" :class="section.hover.icon"></i>
                </a>
              </div>
            </transition>
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
  margin-bottom: 1.5rem;
  position: relative;
  cursor: pointer;
}

img {
  width: 100%;
  object-fit: cover;
}

.link {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    $secondary-color 0%,
    lighten($secondary-color, 33%) 100%
  );
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.icon {
  color: white;
  font-size: 2rem;
  &:hover {
    color: white;
  }
}
</style>
