import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import fetchByID from '../services/fetchByID';
import Carrosel from '../components/Carrosel';
// import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies } from '../Redux/actions/index';
import indicationsList from '../services/indication';

export default function Recepie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const typeSuggestion = type === 'foods' ? 'drinks' : 'foods';
  const [id, setId] = useState(history.location.pathname.split('/').pop());
  console.log(id);
  const [recepie, setRecepie] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  // const [filteredRecepie, setfilteredRecepie] = useState([]);
  // const id = history.location.pathname.split(`/${type}/`);

  const getIngredients = () => {
    const entries = Object.entries(recepie[0]);
    const ingredientsList = entries
      .filter((e) => e[0].includes('strIngredient') && e[1])
      .map((e) => e[1]);
    const measureList = entries
      .filter((e) => e[0].includes('strMeasure') && e[1])
      .map((e) => e[1]);
    const ingredientsAndMeasure = ingredientsList
      .map((ing, index) => `${ing} - ${measureList[index]}`);
    setIngredients(() => ingredientsAndMeasure);
  };

  const getRecepies = async () => {
    const response = await fetchByID(type, id);
    if (response.status === 'ok') {
      console.log(response);
      setRecepie([response.recepie[0]]);
    }
  };

  const indications = indicationsList(searchedRecepies);

  useEffect(() => { getRecepies(); }, [id]);
  useEffect(() => { if (recepie[0]) { getIngredients(); } }, [recepie, id]);
  useEffect(() => { dispatch(actFetchGenericRecepies(typeSuggestion)); }, [id]);
  useEffect(() => history.listen((location) => {
    console.log('new page:', location.pathname);
    setId(() => history.location.pathname.split('/').pop());
  }), [history]);

  return (
    <div>
      {recepie !== [] && recepie.map((ele) => (
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
          <button data-testid="start-recipe-btn" type="button">Start Recepie</button>
          <p data-testid="recipe-category">
            {`${ele.strCategory
            || ele.strGlass} - ${type === 'drinks' && ele.strAlcoholic}`}
          </p>
          <div>
            { ingredients.map((e, index) => (
              <p
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ e + index }
              >
                {e}
              </p>))}
          </div>
          <Carrosel indications={ indications } type={ typeSuggestion } />
          <p data-testid="instructions">{ele.strInstructions}</p>
          <p data-testid="video">{ele.strYoutube}</p>
        </div>))}
    </div>

  );
}
