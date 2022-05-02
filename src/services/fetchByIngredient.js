const fetchByIngredient = async (type, ingredient) => {
  let url = '';
  if (type === 'foods') { url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`; }
  if (type === 'drinks') { url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`; }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchByIngredient error');
    return { status: 'error', data: error };
  }
};

export default fetchByIngredient;
