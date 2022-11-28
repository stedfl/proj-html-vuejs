<script>
import TitleArea from "./TitleArea.vue";
import SliderTestimonials from "./SliderTestimonials.vue";
import SliderPartners from "./SliderPartners.vue";
export default {
  name: "ClientsSection",
  components: {
    TitleArea,
    SliderTestimonials,
    SliderPartners
  },
  props: {
    section: Object,
  }
};
</script>
<template>
  <div class="main-wrap">
    <div class="container-seo text-center">
      <TitleArea :title="section.title" :text="section.text" :textColor="'black'" />
      <div class="row testimonials">
        <SliderTestimonials :testimonials="section.testimonials"/>
      </div>
      <div class="row partners">
        <SliderPartners :partners="section.partners"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.main-wrap {
  background-color: white;
  padding-bottom: 0;
}

.row.testimonials {
  padding-top: 0;
  text-align: center;
}

.row.partners {
  width: 100%;
  padding: 4rem 0 5.5rem ;
  border-top: 1px solid darken($primary-bg, 5%);
  margin-top: 4rem;
}
</style>