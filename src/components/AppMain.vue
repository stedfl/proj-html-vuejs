<script>
import FeatureSection from './FeatureSection.vue';
import ServicesSection from './ServicesSection.vue';
import OurWorkSection from './OurWorkSection.vue';
import PlansSection from './PlansSection.vue';
import {features, services, ourWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    FeatureSection,
    ServicesSection,
    OurWorkSection,
    PlansSection
  },
  data() {
    return {
      features,
      services,
      ourWork,
      plans
    }
  }

}
</script>
<template>
  <main>
    <FeatureSection :section="features" />
    <ServicesSection :section="services" />
    <OurWorkSection :section="ourWork" />
    <PlansSection :section="plans"/>
  </main>
  
</template>



<style lang="scss" scoped>

</style>