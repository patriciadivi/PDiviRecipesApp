import returnValidValue from './returnValidValue';
import getDate from './getDate';

const saveDoneRecipe = (recipe) => {
  // console.log(recipe);
  const newDone = {
    id: returnValidValue(recipe.idDrink, recipe.idMeal),
    type: recipe.idMeal ? 'food' : 'drink',
    nationality: recipe.strArea || '',
    category: recipe.strCategory || '',
    alcoholicOrNot: recipe.strAlcoholic || '',
    name: returnValidValue(recipe.strMeal, recipe.strDrink),
    image: returnValidValue(recipe.strMealThumb, recipe.strDrinkThumb),
    tags: returnValidValue(recipe.strTags, recipe.strTags).split(',') || [],
    doneDate: getDate(),
  };
  console.log('foi');
  let doneRecipes = [];
  const tempData = window.localStorage.getItem('doneRecipes');
  if (tempData) {
    doneRecipes = [...JSON.parse(tempData), newDone];
  } else {
    doneRecipes = [newDone];
  }
  window.localStorage.setItem('doneRecipes', JSON.stringify(doneRecipes));
};

export default saveDoneRecipe;
