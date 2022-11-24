const getPathImage = (imageName, path, format) => {
  return new URL(`${path}${imageName}.${format}`, import.meta.url).href
};

export {getPathImage};