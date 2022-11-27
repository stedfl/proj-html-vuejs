<script>
import SliderHero from "./SliderHero.vue";
import FeatureSection from './FeatureSection.vue';
import ServicesSection from './ServicesSection.vue';
import OurWorkSection from './OurWorkSection.vue';
import PlansSection from './PlansSection.vue';
import NewsSection from './NewsSection.vue';
import ClientsSection from './ClientsSection.vue';
import CallToActionSection from './CallToActionSection.vue';
import {hero, features, services, ourWork, plans, news, clients, callToAction} from '../data/main-components';
export default {
  name: 'AppMain',
  components: {
    SliderHero,
    FeatureSection,
    ServicesSection,
    OurWorkSection,
    PlansSection,
    NewsSection,
    ClientsSection,
    CallToActionSection
  },
  data() {
    return {
      hero,
      features,
      services,
      ourWork,
      plans,
      news,
      clients,
      callToAction
    }
  }

}
</script>
<template>
  <main>
    <SliderHero :hero="hero" />
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
      <ClientsSection :section="clients"/>
    </section>
    <section class="calltoaction">
      <CallToActionSection :section="callToAction" />
    </section>
  </main>
</template>



<style lang="scss" scoped>

</style>