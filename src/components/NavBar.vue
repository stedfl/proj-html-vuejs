<script>
export default {
  name: "NavBar",
  props: {
    menu: Array,
    isApply: Boolean,
    isAllOthers: Boolean
  },
  data() {
    return {
    };
  }
};
</script>
<template>
  <nav class="d-flex align-items-center">
    <ul class="seo d-flex align-items-center">
      <li v-for="(item, index) in this.menu" :key="index">
        <a
          v-if="(isApply && item ==='apply') || (isAllOthers && item !== 'apply')"
          :class="[item === 'apply' ? 'apply' : 'others']"
          class="menu-items text"
          href="#"
          >{{ item }}
        </a >
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
.apply {
  color: $primary-color;
  padding: 0.4rem;
  border: 1px solid $primary-color;
  text-transform: uppercase;
  border-radius: 5px;
  font-size: 0.7rem;
  margin-left: 10px;
}

ul.seo {
  height: 100%;
  margin: 0;
}

.others {
  margin-left: 2rem;
}

header a {
  color: white;
}

footer a {
  color: black;
}

a {
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: capitalize;
  &:hover {
    color: $primary-color;
  }
}
.apply {
}

li:hover {
}
</style>
