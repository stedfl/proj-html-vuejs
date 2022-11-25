<script>
import FeatureSection from './FeatureSection.vue';
import ServicesSection from './ServicesSection.vue';
import OurWorkSection from './OurWorkSection.vue';
import PlansSection from './PlansSection.vue';
import NewsSection from './NewsSection.vue';
import ClientsSection from './ClientsSection.vue';
import {features, services, ourWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    FeatureSection,
    ServicesSection,
    OurWorkSection,
    PlansSection,
    NewsSection,
    ClientsSection
  },
  data() {
    return {
      features,
      services,
      ourWork,
      plans,
      news,
      clients
    }
  }

}
</script>
<template>
  <main>
    <section class="features">
      <FeatureSection :section="features" />
    </section>
    <section class="services">
      <ServicesSection :section="services" />
    </section>
    <section class="ourwork">
      <OurWorkSection :section="ourWork" />
    </section>
    <section class="plans">
      <PlansSection :section="plans"/>
    </section>
    <section class="news">
      <NewsSection :section="news"/>
    </section>
    <section class="clients">
      <clientsSection :section="news"/>
    </section>
  </main>
  
</template>



<style lang="scss" scoped>

</style>