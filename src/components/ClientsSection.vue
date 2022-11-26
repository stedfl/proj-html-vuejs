<script>
import { store } from "../data/store";
import TitleArea from "./TitleArea.vue";
import SliderClients from "./SliderClients.vue";
export default {
  name: "ClientsSection",
  components: {
    TitleArea,
    SliderClients
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
      <TitleArea :title="section.title" :text="section.text" :textColor="'black'" />
      <div class="row">
        <SliderClients :testimonials="section.testimonials"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: white;
  padding-bottom: 5rem;
}

.title-section {
  padding-bottom: 3.1rem;
}

.row {
  padding-top: 0;
  text-align: center;
}

.btn-container {
  border-bottom: 1px solid darken($primary-bg, 5%);
  padding-bottom: 4.3rem;
}
</style>