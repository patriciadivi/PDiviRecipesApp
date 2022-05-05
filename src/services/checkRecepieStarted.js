const checkRecepieStart = (id) => {
  let startedRecepie = false;
  const tempData = window.localStorage.getItem('inProgressRecipes');
  let startedRecepies = [];
  if (tempData) { startedRecepies = JSON.parse(tempData); }
  if (startedRecepies) {
    startedRecepies.forEach((element) => {
      if (element.id === id) { startedRecepie = true; }
    });
  }
  return startedRecepie;
};

export default checkRecepieStart;
