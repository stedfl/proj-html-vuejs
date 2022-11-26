<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import ScrollButton from './components/ScrollButton.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    ScrollButton
  },
  data() {
    return {
    }
  }

}
</script>

<template>
  <AppHeader :menu="menu"/>
  <AppMain/>
  <AppFooter/>
  <ScrollButton/>
</template>



<style lang="scss">
@use './styles/general.scss';

</style>
