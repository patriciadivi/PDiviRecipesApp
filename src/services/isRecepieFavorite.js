const isRecepieFavorite = (id) => {
  let isFavorite = false;
  const tempData = window.localStorage.getItem('favoriteRecipes');
  let favoriteRecepies = [];
  if (tempData) { favoriteRecepies = JSON.parse(tempData); }
  if (favoriteRecepies) {
    console.log(favoriteRecepies, id);
    favoriteRecepies.forEach((element) => {
      if (element.id === id) { isFavorite = true; }
    });
  }
  return isFavorite;
};

export default isRecepieFavorite;
