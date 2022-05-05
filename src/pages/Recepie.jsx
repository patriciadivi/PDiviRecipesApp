import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ListGroup } from 'react-bootstrap';
import fetchByID from '../services/fetchByID';
import Carrosel from '../components/Carrosel';
import { actFetchGenericRecepies } from '../Redux/actions/index';
import indicationsList from '../services/indication';
import checkRecepieStart from '../services/checkRecepieStarted';

export default function Recepie() {
  const history = useHistory();
  const dispatch = useDispatch();
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const typeSuggestion = type === 'foods' ? 'drinks' : 'foods';
  const [id, setId] = useState(history.location.pathname.split('/').pop());
  const [recepie, setRecepie] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const [recipieStarted, setRecepieStarted] = useState(false);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);

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
  useEffect(() => { setRecepieStarted(() => checkRecepieStart(id)); }, [id]);
  useEffect(() => history.listen((location) => {
    console.log('new page:', location.pathname);
    setId(() => history.location.pathname.split('/').pop());
  }), [history]);

  console.log(recipieStarted);
  return (
    <div className="mx-5">
      {recepie !== [] && recepie.map((ele) => (
        <div
          key={ ele.idMeal || ele.idDrink }
          className="d-flex flex-column"
        >
          <img
            data-testid="recipe-photo"
            src={ ele.strMealThumb || ele.strDrinkThumb }
            alt="aaa"
          />
          <h2 data-testid="recipe-title" className="mt-3">
            {ele.strMeal || ele.strDrink}
          </h2>
          <div className="mt-3">
            <Button
              variant="light"
              data-testid="share-btn"
              type="button"
            >
              Compartilhar
            </Button>
            <Button
              variant="light"
              data-testid="favorite-btn"
              type="button"
            >
              Favoritar
            </Button>
          </div>
          <p data-testid="recipe-category" className="mt-3">
            {`${ele.strCategory
            || ele.strGlass} - ${type === 'drinks' && ele.strAlcoholic}`}
          </p>
          <ListGroup variant="flush" className="mt-3">
            { ingredients.map((e, index) => (
              <ListGroup.Item
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ e + index }
              >
                {e}
              </ListGroup.Item>))}
          </ListGroup>
          <Carrosel indications={ indications } type={ typeSuggestion } />
          <p data-testid="instructions">{ele.strInstructions}</p>
          <p data-testid="video">{ele.strYoutube}</p>
          <Button data-testid="start-recipe-btn" type="button">Start Recepie</Button>
        </div>))}
    </div>

  );
}
