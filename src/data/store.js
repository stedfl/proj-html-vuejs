import {reactive} from "vue";
export const store = reactive({
  getPathImage : (imageName, path, format) => {
    return new URL(`${path}${imageName}.${format}`, import.meta.url).href
  }
});