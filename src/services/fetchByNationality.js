const fetchByNationality = async (type, nationality) => {
  let url = '';
  if (type === 'foods') { url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${nationality}`; }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    // const data = meals.map((meal) => meal.strArea);
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchByNationality error');
    return { status: 'error', data: error };
  }
};

export default fetchByNationality;
