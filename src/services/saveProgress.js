const saveProgress = (type, id, ingredient, checked) => {
  const key = type === 'foods' ? 'meals' : 'cocktails';
  const savedData = window.localStorage.getItem('inProgressRecipes');
  if (savedData) {
    // if (tempData[key][id]) {
    if (checked) {
      savedData[key][id] = [...savedData[key][id], ingredient];
    } else {
      const newArray = savedData[key][id].filter((e) => e !== ingredient);
      savedData[key][id] = newArray;
    }
    window.localStorage.setItem('inProgressRecipes', JSON.stringify(savedData));
    // }
  } else {
    newObj = { [key]: { [id]: [ingredient] } };
    window.localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
  }
};

export default saveProgress;
