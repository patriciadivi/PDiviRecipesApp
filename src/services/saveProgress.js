const saveProgress = (type, id, ingredient, checked) => {
  const key = type === 'foods' ? 'meals' : 'cocktails';
  const savedData = window.localStorage.getItem('inProgressRecipes');
  if (savedData) {
    // if (tempData[key][id]) {
    const newObj = JSON.parse(savedData);
    if (checked) {
      console.log(newObj[key][id]);
      newObj[key][id] = [...newObj[key][id], ingredient];
    } else {
      const newArray = newObj[key][id].filter((e) => e !== ingredient);
      newObj[key][id] = newArray;
    }
    window.localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
    return newObj[key][id].length;
    // }
  }
  const newObj = { [key]: { [id]: [ingredient] } };
  window.localStorage.setItem('inProgressRecipes', JSON.stringify(newObj));
  return newObj[key][id].length;
};

export default saveProgress;
