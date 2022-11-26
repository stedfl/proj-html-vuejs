import { reactive } from "vue";
export const store = reactive({
  getPathImage: function (imageName, extension) {
    return new URL(`../assets/img/${imageName}.${extension}`, import.meta.url)
      .href;
  },
});
