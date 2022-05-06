const checkRecepieStart = (id) => {
  let startedRecepie = false;
  const tempData = window.localStorage.getItem('inProgressRecipes');
  let startedRecepies = [];
  if (tempData) { startedRecepies = JSON.parse(tempData); }
  if (startedRecepies) {
    const keys = Object.keys(startedRecepies);
    keys.forEach((e) => {
      console.log(e);
      if (startedRecepies[e][id]) { startedRecepie = true; }
    });
  }
  return startedRecepie;
};

export default checkRecepieStart;
