const checkRecepieDone = (id) => {
  let doneRecepie = false;
  const tempData = window.localStorage.getItem('doneRecipes');
  let doneRecepies = [];
  if (tempData) { doneRecepies = JSON.parse(tempData); }
  if (doneRecepies) {
    doneRecepies.forEach((element) => {
      if (element.id === id) { doneRecepie = true; }
    });
  }
  return doneRecepie;
};

export default checkRecepieDone;
