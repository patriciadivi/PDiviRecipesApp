import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import fetchByID from '../services/fetchByID';

export default function Recepie() {
  const history = useHistory();
  const [recepie, setRecepie] = useState([]);
  const [filteredRecepie, setfilteredRecepie] = useState([]);
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const id = history.location.pathname.split(`/${type}/`);

  const getRecepies = async () => {
    const response = await fetchByID(type, id[1]);
    setRecepie([response.recepie[0]]);
  };
  useEffect(() => {
    getRecepies();
  }, []);
  useEffect(() => {
    console.log(recepie);
  }, [recepie]);
  useEffect(() => {
    setfilteredRecepie(recepie.filter((element) => element !== null
     && element.length !== 0));
  }, [recepie]);
  useEffect(() => {
    console.log(Object.keys(filteredRecepie[0]));
  }, [filteredRecepie]);

  return (
    <div>
      {recepie?.map((ele) => (
        <div key={ ele.idMeal || ele.idDrink }>
          <img
            data-testid="recipe-photo"
            src={ ele.strMealThumb || strDrinkThumb }
            alt="aaa"
          />
          <p data-testid="recipe-title">
            {ele.strMeal
          || ele.strDrink}

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
