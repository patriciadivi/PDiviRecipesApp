const fetchByName = async (value) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`;
  const request = await fetch(url);
  const dataByName = await request.json();
  return dataByName.meals;
};

export default fetchByName;
