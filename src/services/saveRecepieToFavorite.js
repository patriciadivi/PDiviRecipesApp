import returnValidValue from './returnValidValue';

const saveRecepieToFavorite = (recepie, isFavorite) => {
  if (!isFavorite) {
    const newFavorite = {
      id: returnValidValue(recepie.idDrink, recepie.idMeal),
      type: recepie.idMeal ? 'food' : 'drink',
      nationality: recepie.strArea || '',
      category: returnValidValue(recepie.strCategory, recepie.strGlass),
      alcoholicOrNot: recepie.strAlcoholic || '',
      name: returnValidValue(recepie.strMeal, recepie.strDrink),
      image: returnValidValue(recepie.strMealThumb, recepie.strDrinkThumb),
    };
    let favoriteRecepies = [];
    const tempData = window.localStorage.getItem('favoriteRecipes');
    if (tempData) {
      favoriteRecepies = [...JSON.parse(tempData), newFavorite];
    } else {
      favoriteRecepies = [newFavorite];
    }
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecepies));
  } else {
    const id = returnValidValue(recepie.idDrink, recepie.idMeal);
    const tempData = window.localStorage.getItem('favoriteRecipes');
    const favoriteRecepies = JSON.parse(tempData).filter((e) => e.id !== id);
    window.localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecepies));
  }
};

export default saveRecepieToFavorite;
