<script>
export default {
  name: 'TitleArea',
  props: {
    title: String,
    text: String,
    textColor: String
  }
}
</script>
<template>
  <div :class="textColor" class="title-section text">
    <h2>{{title}}</h2>
    <p class="p2">{{text}}</p>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.title-section {
  text-align: center;
  padding: 5rem 3rem 4rem;
  width: 60%;
  margin: 0 auto;
  h2 {
    line-height: 3.5rem;
    margin-bottom: 1rem;
  }
}
</style>