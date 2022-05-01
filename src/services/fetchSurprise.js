const fetchSurprise = async (type) => {
  let url = '';
  if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/random.php'; }
  if (type === 'drinks') { url = 'https://www.thecocktaildb.com/api/json/v1/1/random.php'; }
  console.log(url);
  try {
    console.log('foi');
    const resolve = await fetch(url);
    console.log(response);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchSurprise error');
    console.log(error);
    return { status: 'error', data: error };
  }
};

export default fetchSurprise;
