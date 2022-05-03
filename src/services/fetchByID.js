const fetchByID = async (type, id) => {
  let url = '';
  if (type === 'foods') { url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`; }
  if (type === 'drinks') { url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`; }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    let recepie = [];
    if (type === 'foods') { recepie = data.meals; }
    if (type === 'drinks') {
      recepie = data.drinks;
    }

    return { status: 'ok', recepie };
  } catch (error) {
    console.log('fetchByID error');
    return { status: 'error', data: error };
  }
};

export default fetchByID;
