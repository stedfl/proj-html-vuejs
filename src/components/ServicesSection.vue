<script>
import TitleArea from "./TitleArea.vue";
export default {
  name: "ServicesSection",
  components: {
    TitleArea,
  },
  props: {
    section: Object,
  },
};
</script>
<template>
  <div class="main-wrap long">
    <div class="container-seo">
      <TitleArea
        :title="section.title"
        :text="section.text"
        :textColor="'white'"
      />
      <div class="row row-cols-1 row-cols-md-4">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div class="card text-center mb-5 mb-md-0">
            <div class="top">
              <a
                href="
              #"
                ><i
                class="icon-brands"
                  :class="[
                    'icon',
                    card.icon,
                    card.icon === 'fa-google' ? 'fa-brands' : 'fa-solid',
                  ]"
                ></i
              ></a>
              <a class="title" href="#">
                <h5>{{ card.title }}</h5>
              </a>
            </div>
            <p>{{ card.text }}</p>
            <a :href="card.link.link"
              >{{ card.link.placeholder }}
              <i class="fa-solid fa-chevron-right icon-chevron"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: $secondary-bg;
  background-image: url(../assets/img/pattern_background.png);
}
.card {
  color: white;
  background-color: lighten($secondary-bg, 3%);
  padding: 35px;
}

.title {
  color: white;
}

a {
  color: $primary-color;
  font-weight: 700;
  text-transform: capitalize;
  &:hover {
    color: lighten($primary-color, 5%);
  }
  .icon-chevron {
    font-size: 0.6rem;
  }
}
</style>
