import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Header from '../components/Header';
import randomIdNumber from '../services/randomIdNumber';
import fetchByID from '../services/fetchByID';
import returnValidValue from '../services/returnValidValue';
import isRecepieFavorite from '../services/isRecepieFavorite';
import saveRecepieToFavorite from '../services/saveRecepieToFavorite';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/components/Header.css';

export default function RecepieInProgres() {
  const history = useHistory();
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const idLocation = -2;
  const id = history.location.pathname.split('/').at(idLocation);
  const [recepie, setRecepie] = useState([]);
  const [isFavorite, setIsFavorite] = useState(isRecepieFavorite(id));
  const [showText, setShowText] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  // const [id, setId] = useState(history.location.pathname.split('/').at(idLocation));
  // setId(() => id);
  const timeShowingText = 3000;

  const removeText = () => {
    setShowText(() => false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href.replace('/in-progress', ''));
    setShowText(() => true);
    setTimeout(removeText, timeShowingText);
  };

  const handleFavoriteClick = () => {
    saveRecepieToFavorite(recepie[0], isFavorite);
    setIsFavorite(() => !isFavorite);
  };

  const getRecepies = async () => {
    const response = await fetchByID(type, id);
    if (response.status === 'ok') {
      setRecepie([response.recepie[0]]);
    }
  };

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

  useEffect(() => { getRecepies(); }, [id]);
  useEffect(() => { if (recepie[0]) { getIngredients(); } }, [recepie, id]);
  return (
    <div className="mx-5">
      <Header title="RecepieInProgres" searchEnabled={ false } />
      {recepie !== [] && recepie.map((ele) => (
        <div
          key={ randomIdNumber() }
          className="d-flex flex-column"
        >
          <img
            data-testid="recipe-photo"
            src={ returnValidValue(ele.strMealThumb, ele.strDrinkThumb) }
            alt="recepie"
          />
          <h2 data-testid="recipe-title" className="mt-3">
            {returnValidValue(ele.strMeal, ele.strDrink)}
          </h2>
          <div className="mt-3">
            <Button
              variant="light"
              data-testid="share-btn"
              onClick={ () => copyToClipboard() }
              type="button"
            >
              <img src={ shareIcon } alt="share" />
            </Button>
            <Button
              variant="light"
              // data-testid="favorite-btn"
              type="button"
              onClick={ () => handleFavoriteClick() }
            >
              <img
                data-testid="favorite-btn"
                src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
                alt="share"
              />
            </Button>
          </div>
          {showText && <p>Link copied!</p>}
          <p data-testid="recipe-category" className="mt-3">
            {`${returnValidValue(ele.strCategory, ele.strAlcoholic)}`}
          </p>
          <ListGroup variant="flush" className="mt-3">
            { ingredients.map((e, index) => (
              <ListGroup.Item key={ e + index + randomIdNumber }>
                <label htmlFor={ e } data-testid={ `${index}-ingredient-step` }>
                  <input
                    name="isGoing"
                    type="checkbox"
                    id={ e }
                    // checked={ this.state.isGoing }
                    // onChange={ this.handleInputChange }
                  />
                  {e}
                </label>
              </ListGroup.Item>))}
          </ListGroup>
          <p data-testid="instructions">{ele.strInstructions}</p>
          <Button data-testid="finish-recipe-btn"> Finish Recipe</Button>
        </div>))}
    </div>
  );
}
