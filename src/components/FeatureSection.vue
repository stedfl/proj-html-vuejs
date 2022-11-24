<script>
import TitleArea from './TitleArea.vue'
export default {
  name: 'FeatureSection',
  components: {
    TitleArea
  },
  props: {
    features: Object
  }
}
</script>
<template>
  <div class="main-wrap">
    <div class="container-hero">
      <TitleArea :title="features.title" :text="features.text"/>

    </div>
  </div>

  
</template>



<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.main-wrap {
  background-color: $primary-bg;
  min-height: 300px;
}

</style>