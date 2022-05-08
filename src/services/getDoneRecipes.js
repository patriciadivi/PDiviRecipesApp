const getDoneRecipes = (type = 'all') => {
  console.log(`getDoneRecipes: ${type}`);
  const tempData = window.localStorage.getItem('doneRecipes');
  let doneRecepies = [];
  if (tempData) {
    doneRecepies = JSON.parse(tempData);
    if (type !== 'all' && doneRecepies) {
      doneRecepies = doneRecepies.filter((e) => e.type === type);
    }
  }
  console.log(doneRecepies);
  return doneRecepies;
};

export default getDoneRecipes;
