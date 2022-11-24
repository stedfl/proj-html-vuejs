<script>
import FeatureSection from './FeatureSection.vue';
import {features, services, outWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    FeatureSection
  },
  data() {
    return {
      features
    }
  }

}
</script>
<template>
  <main>
    <FeatureSection :features="features" />
  </main>
  
</template>



<style lang="scss" scoped>

</style>