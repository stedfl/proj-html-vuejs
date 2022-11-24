<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

// import {store} from './data/store';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },
  data() {
    return {
      // store
    }
  }

}
</script>

<template>
  <AppHeader :menu="menu"/>
  <AppMain/>
  <AppFooter/>
  
</template>



<style lang="scss">
@use './styles/general.scss';

</style>
