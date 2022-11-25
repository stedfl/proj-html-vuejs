<script>
import { store } from "../data/store";
import TitleArea from "./TitleArea.vue";
export default {
  name: "PlansSection",
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
    <div class="container-seo">
      <TitleArea
        :title="section.title"
        :text="section.text"
        :textColor="'white'"
      />
      <div class="row">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div class="card text-center rounded-0">
            <div class="type">
              <h3>{{ card.type }}</h3>
            </div>
            <div class="price">
              <span>$</span>
              <span>{{ card.price }}</span>
              <span>99</span>
              <span>{{ card.frequency }}</span>
            </div>
            <div class="info">
              <ul>
                <li v-for="(item, index) in card.info" :key="index">
                  {{ item }}
                </li>
              </ul>
            </div>
            <div class="button">
              <button
                :class="[
                  'btn-seo',
                  card.type === 'professional' ? 'default' : 'special',
                ]"
              >
                {{ card.button }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-image: url(../assets/img/background1.jpg);
  background-size: cover;
  min-height: 900px;
}
.card {
  padding: 35px;
  border: transparent;
  h3 {
    margin-bottom: 1rem;
  }
}

.row {
  padding-top: 0;
}

img {
  margin-top: 2rem;
}

.btn-seo.special {
  color: #5d5c5d;
  background-color: transparent;
  border: 2px solid #5d5c5d;
}

.btn-seo.special:hover {
  color: $secondary-color;
  border: 2px solid $secondary-color;
}
</style>
