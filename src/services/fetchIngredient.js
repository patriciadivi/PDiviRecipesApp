const fetchIngredient = async (type, ingredient) => {
  let url = '';
  if (type === 'foods') { url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`; }
  if (type === 'drinks') { url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`; }

  const request = await fetch(url);
  const data = await request.json();
  if (type === 'foods') {
    return data.meals;
  } if (type === 'drinks') {
    console.log(data.drinks);
    return data.drinks;
  }
};

export default fetchIngredient;
