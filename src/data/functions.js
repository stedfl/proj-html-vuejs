const getPathImage = (imageName, extension) => {
    return new URL(`../assets/img/${imageName}.${extension}`, import.meta.url)
      .href;
  };

export {getPathImage};