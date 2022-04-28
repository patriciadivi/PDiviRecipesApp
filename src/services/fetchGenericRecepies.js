const fetchGenericRecepies = async (select) => {
  let url = '';
  if (select === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/search.php?s='; }
  if (select === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='; }
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
