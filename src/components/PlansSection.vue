<script>
import TitleArea from "./TitleArea.vue";
export default {
  name: "PlansSection",
  components: {
    TitleArea,
  },
  props: {
    section: Object,
  }
};
</script>
<template>
  <div class="main-wrap short">
    <div class="container-seo">
      <TitleArea
        :title="section.title"
        :text="section.text"
        :textColor="'white'"
      />
      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <div v-for="(card, index) in section.cards" :key="index" class="col">
          <div class="card text-center rounded-0  mb-5 mb-md-0">
            <div class="type">
              <h3>{{ card.type }}</h3>
            </div>
            <div class="price-container">
              <div class="price">
                <span class="currency">
                <i class="fa-solid fa-dollar-sign icon-dollar"></i>
                </span>
                <span class="integer">{{ card.price.integer }}</span>
                <span class="cents">{{ card.price.cents }}</span>
                <span class="frequency">{{ card.frequency }}</span>
              </div>
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
}

.row {
  padding-top: 0;
}

.card {
  cursor: pointer;
}

.card div:nth-child(even) {
  background-color: $primary-bg;
}
.type {
  padding: 1.5rem;
}

.price-container {
  padding: 1rem;
 
}

.price {
  position: relative;
  width: 130px;
  margin: 0 auto;
}

.icon-dollar, .cents {
  position: absolute;

}
.icon-dollar {
  font-size: 1.2rem;
  margin-right: 10px;
  top: 25px;
}

.integer,
.cents {
  color: $secondary-color;
  font-weight: 700;
  top: 14px;
}

.integer {
  font-size: 3.4rem;
  margin-left: 10px;
}

.cents {
  font-size: 1rem;
}

.frequency {
  font-size: 0.7rem;
  font-style: italic;
  font-weight: 400;
}

li {
  margin: 1.8rem 0;
}

.button {
  padding: 1.5rem;
}

.btn-seo.special {
  color: #5d5c5d;
  background-color: transparent;
  border: 2px solid #5d5c5d;;
}

.btn-seo.special:hover {
  color: $secondary-color;
  border: 2px solid $secondary-color;
}
</style>
