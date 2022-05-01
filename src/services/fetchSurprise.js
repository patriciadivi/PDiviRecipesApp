const fetchSurprise = async (type) => {
  let url = '';
  if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/random.php'; }
  if (type === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'; }
  try {
    console.log('foi');
    const resolve = await fetch(url);
    const data = await resolve.json();
    let recepieId = '';
    if (type === 'foods') { recepieId = data.meals[0].idMeal; }
    if (type === 'drinks') { recepieId = data.drinks[0].idDrink; }
    return { status: 'ok', recepieId };
  } catch (error) {
    console.log('fetchSurprise error');
    return { status: 'error', data: error };
  }
};

export default fetchSurprise;
