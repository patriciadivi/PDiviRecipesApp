const fetchRecepiesByCategories = async (type, category) => {
  let url = '';
  if (type === 'foods') {
    url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  }
  if (type === 'drinks') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchRecepiesByCategories error');
    return { status: 'error', data: error };
  }
};

export default fetchRecepiesByCategories;
