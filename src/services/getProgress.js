const getProgress = (type, id) => {
  const key = type === 'foods' ? 'meals' : 'cocktails';
  const savedData = window.localStorage.getItem('inProgressRecipes');
  let usedIngredients = [];
  if (savedData) {
    const tempObj = JSON.parse(savedData);
    if (tempObj[key] && tempObj[key][id]) {
      usedIngredients = tempObj[key][id];
    }
  }
  return usedIngredients;
};

export default getProgress;
