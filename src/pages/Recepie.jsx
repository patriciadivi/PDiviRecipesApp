import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchByID from '../services/fetchByID';

export default function Recepie() {
  const history = useHistory();
  const [recepie, setRecepie] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  // const [filteredRecepie, setfilteredRecepie] = useState([]);
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const id = history.location.pathname.split(`/${type}/`);

  const getIngredients = () => {
    const entries = Object.entries(recepie[0]);
    const ingredientsList = entries
      .filter((e) => e[0].includes('strIngredient') && e[1])
      .map((e) => e[1]);
    setIngredients(() => ingredientsList);
  };

  const getRecepies = async () => {
    const response = await fetchByID(type, id[1]);
    if (response.status === 'ok') {
      setRecepie([response.recepie[0]]);
    }
  };

  useEffect(() => {
    getRecepies();
  }, []);
  useEffect(() => {
    // console.log(recepie);
    if (recepie[0]) { getIngredients(); }
  }, [recepie]);
  // useEffect(() => {
  //   setfilteredRecepie(recepie.filter((element) => element !== null
  //     && element.length !== 0));
  // }, [recepie]);
  // useEffect(() => {
  //   console.log(Object.keys(filteredRecepie[0]));
  // }, [filteredRecepie]);

  console.log(ingredients);
  return (
    <div>
      {recepie?.map((ele) => (
        <div key={ ele.idMeal || ele.idDrink }>
          <img
            data-testid="recipe-photo"
            src={ ele.strMealThumb || ele.strDrinkThumb }
            alt="aaa"
          />
          <p data-testid="recipe-title">
            {ele.strMeal || ele.strDrink}
          </p>
          <button data-testid="share-btn" type="button">Compartilhar</button>
          <button data-testid="favorite-btn" type="button">Favoritar</button>
          <p data-testid="recipe-category">
            {ele.strCategory
            || ele.strGlass}
          </p>
          <p data-testid="instructions">{ele.strInstructions}</p>
          <p data-testid="video">{ele.strYoutube}</p>
        </div>))}
    </div>

  );
}
