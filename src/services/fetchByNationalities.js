const fetchByNationality = async (type) => {
  let url = '';
  if (type === 'foods') { url = 'https://www.themealdb.com/api/json/v1/1/list.php?a=list'; }
  try {
    const resolve = await fetch(url);
    const data = await resolve.json();
    return { status: 'ok', data };
  } catch (error) {
    console.log('fetchByNationality error');
    return { status: 'error', data: error };
  }
};

export default fetchByNationality;
