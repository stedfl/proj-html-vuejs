<script>
import { store } from "../data/store";
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
      store,
    };
  },
};
</script>
<template>
  <div class="main-wrap">
    <div class="container-seo text-center">
      <TitleArea :title="section.title" :text="section.text" />
      <div class="row row-cols-3">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div class="card text-center">
            <img :src="store.getPathImage(card, 'jpg')" :alt="card" />
            <div class="link justify-content-center align-items-center">
              <a :href="section.hover.link">
                <i class="fa-solid icon" :class="section.hover.icon"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <button class="btn-seo">{{ section.button }}</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: $primary-bg;
  padding-bottom: 7.5rem;
}

.row {
  margin-bottom: 3.7rem;
}

.card {
  margin-bottom: 1.5rem;
  position: relative;
}

img {
  width: 100%;
  object-fit: cover;
}

.card:hover .link {
  top: 0;
  left: 0;
  visibility: visible;
  background-image: linear-gradient(
    $secondary-color 0%,
    lighten($secondary-color, 33%) 100%
  );
}

.link {
  position: absolute;
  visibility: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}

.icon {
  top: 100%;
  color: white;
  font-size: 2rem;
}
</style>
