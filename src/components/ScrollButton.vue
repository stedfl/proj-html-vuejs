<script>
export default {
  name: "ScrollButton",
  data() {
    return {
      showScrollToTop: false,
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll(event) {
      const rootElement = document.documentElement;
      if (rootElement.scrollTop > rootElement.clientHeight) {
        this.showScrollToTop = true;
      } else {
        this.showScrollToTop = false;
      }
    },
  },
};
</script>
<template>
  <transition name="fade">
    <div
      v-if="showScrollToTop"
      :class="{ fadein: showScrollToTop }"
      class="scroll-button d-flex justify-content-center align-items-center"
    >
      <a href="#header">
        <i class="fa-solid fa-chevron-up icon-chevron"></i>
      </a>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;

.fade-enter-active,
.fase-leave-active {
  transition: opacity 1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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

  .fadein {
    transition: all 3s;
  }
}
</style>
