<script>
import TitleArea from './TitleArea.vue';
export default {
  name: 'CallToActionSection',
  components: {
    TitleArea
  },
  props: {
    section: Object
  }
}
</script>
<template>
  <div class="main-wrap long">
    <div class="filter d-flex justify-content-center align-items-center">
      <div class="container-seo text-center">
        <TitleArea :title="section.title" :text="section.text" :textColor="'white special'"/>
        <button class="btn-seo default">{{section.button}}</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.main-wrap {
  background-image: url(../assets/img/CTA-seo-1.jpg);
  height: 493px;
  position: relative;
}
.filter {
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0, 0.5);
}

.title-section.special {
  padding-top: 0;
  padding-bottom: 1rem;
}
</style>