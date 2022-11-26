<script>
export default {
  name: 'ScrollButton',
  data() {
    return {
      showScrollToTop: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll (event) {
      const rootElement = document.documentElement;
      console.log('scroll client:' + rootElement.clientHeight);
      console.log('scroll top' + rootElement.scrollTop );
      if ((rootElement.scrollTop > rootElement.clientHeight )) {
        this.showScrollToTop = true;
        console.log('Show button')
        // scrollToTopBtn.classList.add("showBtn")
      } else {
        console.log('hide button')
        this.showScrollToTop = false;
        // scrollToTopBtn.classList.remove("showBtn")
      }
    }
  }
}
</script>
<template>
  <div v-if="showScrollToTop" class="scroll-button d-flex justify-content-center align-items-center">
    <a href="#header">
      <i class="fa-solid fa-chevron-up icon-chevron"></i>
    </a>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.scroll-button {
  position: fixed;
  width: 52px;
  height: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  bottom: 0;
  right: 60px;
  background-color: #343b44;
  z-index: 999;
  transition: all 0.5s;
  &:hover {
    background-color: $primary-color;
  }
  .icon-chevron {
    color: white;
  }
}

</style>