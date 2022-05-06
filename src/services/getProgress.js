const getProgress = (type, id) => {
  const key = type === 'foods' ? 'meals' : 'cocktails';
  const savedData = window.localStorage.getItem('inProgressRecipes');
  let doneIngredients = [];
  if (savedData) {
    tempObj = JSON.parse(savedData);
    if (tempObj[key][id]) {
      doneIngredients = tempObj[key][id];
    }
  }
  return doneIngredients;
};

export default getProgress;
