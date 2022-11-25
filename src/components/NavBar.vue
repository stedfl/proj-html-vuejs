<script>
export default {
  name: "NavBar",
  props: {
    menu: Array,
    isApply: Boolean,
    isAllOthers: Boolean,
  },
};
</script>
<template>
  <nav class="d-flex align-items-center">
    <ul class="seo d-flex align-items-center">
      <li v-for="(item, index) in menu" :key="index">
        <a
          v-if="
            (isApply && item.placeholder === 'apply') ||
            (isAllOthers &&
              item.placeholder !== 'apply' &&
              item.placeholder !== 'get in touch') ||
            (!isApply && item.placeholder === 'get in touch')
          "
          :class="[item.placeholder === 'apply' ? 'apply' : 'others']"
          class="menu-items text"
          :href="item.link"
          >{{ item.placeholder }}
        </a>
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
  transition: all 0.5s;
  &:hover {
    color: $primary-color;
  }
}
</style>
