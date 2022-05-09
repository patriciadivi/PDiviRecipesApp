const fetchFirstLetter = async (type, value) => {
  let url = '';
  if (type === 'foods') {
    url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
  }
  if (type === 'drinks') {
    url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${value}`;
  }
  const request = await fetch(url);
  const dataByName = await request.json();
  if (type === 'foods') {
    return dataByName.meals;
  } if (type === 'drinks') {
    return dataByName.drinks;
  }
};

// export default fetchByName;

// const fetchFirstLetter = async (value) => {
//   const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${value}`;
//   const request = await fetch(url);
//   const data = await request.json();
//   return data.meals;
// };

export default fetchFirstLetter;
