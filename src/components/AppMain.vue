<script>
import FeatureSection from './FeatureSection.vue';
import ServicesSection from './ServicesSection.vue';
import {features, services, outWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    FeatureSection,
    ServicesSection
  },
  data() {
    return {
      features,
      services
    }
  }

}
</script>
<template>
  <main>
    <FeatureSection :features="features" />
    <ServicesSection :services="services" />
  </main>
  
</template>



<style lang="scss" scoped>

</style>