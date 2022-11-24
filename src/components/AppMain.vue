<script>
import FeatureSection from './FeatureSection.vue';
import ServicesSection from './ServicesSection.vue';
import OurWorkSection from './OurWorkSection.vue';
import {features, services, ourWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    FeatureSection,
    ServicesSection,
    OurWorkSection

  },
  data() {
    return {
      features,
      services,
      ourWork
    }
  }

}
</script>
<template>
  <main>
    <FeatureSection :features="features" />
    <ServicesSection :services="services" />
    <OurWorkSection :ourWork="ourWork" />
  </main>
  
</template>



<style lang="scss" scoped>

</style>