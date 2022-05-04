const fetchFirstLetter = async (value) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  const request = await fetch(url);
  const data = await request.json();
  return data.meals;
};

export default fetchFirstLetter;
