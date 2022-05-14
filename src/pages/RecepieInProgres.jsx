import React, { useEffect, useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
// import Header from '../components/Header';
import randomIdNumber from '../services/randomIdNumber';
import fetchByID from '../services/fetchByID';
import returnValidValue from '../services/returnValidValue';
import isRecepieFavorite from '../services/isRecepieFavorite';
import saveRecepieToFavorite from '../services/saveRecepieToFavorite';

import shareIcon from '../images/shareIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import '../styles/components/Header.css';
import saveProgress from '../services/saveProgress';
import getProgress from '../services/getProgress';
import saveDoneRecipe from '../services/saveDoneRecipe';

export default function RecepieInProgres() {
  const history = useHistory();
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const pathArray = history.location.pathname.split('/');
  const idLocation = -2;
  const id = pathArray[pathArray.length + idLocation];
  const [recepie, setRecepie] = useState([]);
  const [isFavorite, setIsFavorite] = useState(isRecepieFavorite(id));
  const [showText, setShowText] = useState(false);
  const [ingredients, setIngredients] = useState([]);
  const [usedIngredients, setUsedIngredients] = useState([]);
  const [isFinishAvailable, setIsFinishAvailable] = useState(false);
  // const usedIngredients = getProgress(type, id);
  // const [checkedIng, setCheckedIng] =
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

  const setBtnFinishAvailable = (numOfIng) => {
    console.log(`numOfIng ${numOfIng}`);
    console.log(`isFinishAvailable ${isFinishAvailable}`);
    if (isFinishAvailable && (numOfIng < ingredients.length)) {
      console.log('1');
      setIsFinishAvailable(() => false);
    } else if (numOfIng >= ingredients.length) {
      console.log('2');
      setIsFinishAvailable(() => true);
    }
  };

  const handleCheck = ({ target }) => {
    const { name, checked } = target;
    // console.log(name, checked);
    const numOfIng = saveProgress(type, id, name, checked);
    setBtnFinishAvailable(numOfIng);
    // setUsedIngredients(() => getProgress(type, id));
  };

  const handleFinish = () => {
    saveDoneRecipe(recepie[0]);
    history.push('/done-recipes');
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

  useEffect(() => {
    setUsedIngredients(() => getProgress(type, id));
    getRecepies();
    // console.log(usedIngredients.length);
    // setBtnFinishAvailable(getProgress(type, id).length);
  }, [id]);
  useEffect(() => { if (recepie[0]) { getIngredients(); } }, [recepie, id]);
  return (
    <div className="mx-5">
      {/* <Header title="RecepieInProgres" searchEnabled={ false } /> */}
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
                    name={ e }
                    type="checkbox"
                    id={ e }
                    defaultChecked={ usedIngredients.includes(e) }
                    onChange={ handleCheck }
                  />
                  {e}
                </label>
              </ListGroup.Item>))}
          </ListGroup>
          <p data-testid="instructions">{ele.strInstructions}</p>
          <Button
            data-testid="finish-recipe-btn"
            // disabled={ usedIngredients.length !== ingredients.length }
            disabled={ !isFinishAvailable }
            onClick={ () => handleFinish() }
          >
            Finish Recipe
          </Button>
        </div>))}
    </div>
  );
}
