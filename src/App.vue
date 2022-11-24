<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import {menu, credits} from './data/menu.js';
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
      menu,
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
