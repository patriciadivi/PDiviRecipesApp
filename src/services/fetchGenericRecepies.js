const fetchGenericRecepies = async (type) => {
  let url = '';
  if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; }
  if (type === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; }
  console.log(url);
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchGenericRecepies error');
    return { status: 'error', data: error };
  }
};

export default fetchGenericRecepies;
