const indicationsList = (recepies) => {
  const indications = recepies
    .map((rec) => [rec.idMeal || rec.idDrink,
      rec.strMealThumb || rec.strDrinkThumb,
      rec.strMeal || rec.strDrink]);
  return indications;
};

export default indicationsList;
