import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import fetchByID from '../services/fetchByID';
import randomIdNumber from '../services/randomIdNumber';
// import RecepieCard from '../components/RecepieCard';
import { actFetchGenericRecepies } from '../Redux/actions/index';
import indicationsList from '../services/indication';

export default function Recepie() {
  const numberOfIndications = 6;
  const history = useHistory();
  const dispatch = useDispatch();

  const [recepie, setRecepie] = useState([]);
  const [ingredients, setIngredients] = useState([]);
  const searchedRecepies = useSelector((state) => state.reducer1.searchedRecepies);
  // const [filteredRecepie, setfilteredRecepie] = useState([]);
  const type = history.location.pathname.includes('/foods') ? 'foods' : 'drinks';
  const typeSuggestion = type === 'foods' ? 'drinks' : 'foods';
  const id = history.location.pathname.split(`/${type}/`);

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
    const response = await fetchByID(type, id[1]);
    if (response.status === 'ok') {
      setRecepie([response.recepie[0]]);
    }
  };

  const indications = indicationsList(searchedRecepies);

  // console.log(indications);

  useEffect(() => {
    getRecepies();
  }, []);
  useEffect(() => {
    if (recepie[0]) { getIngredients(); }
  }, [recepie]);
  useEffect(() => { dispatch(actFetchGenericRecepies(typeSuggestion)); }, []);
  // useEffect(() => {
  //   setfilteredRecepie(recepie.filter((element) => element !== null
  //     && element.length !== 0));
  // }, [recepie]);
  // useEffect(() => {
  //   console.log(Object.keys(filteredRecepie[0]));
  // }, [filteredRecepie]);

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
          <div className="d-flex flex-wrap justify-content-around">
            {indications.filter((e, i) => i < numberOfIndications)
              .map((rec, index) => (
                <Card
                  style={ { width: '10rem' } }
                  className="mt-3"
                  key={ `${rec[0]}${randomIdNumber()}` }
                  data-testid={ `${index}-recomendation-card` }
                >
                  <Link to={ `/${type}/${id}` } className="stretched-link" />
                  <Card.Img
                    variant="top"
                    src={ rec[1] }
                    data-testid={ `${index}-card-img` }
                  />
                  <Card.Body>
                    <Card.Title data-testid={ `${index}-recomendation-title` }>
                      { rec[2] }
                    </Card.Title>
                  </Card.Body>
                </Card>
                // <RecepieCard
                //   key={ `${rec.idMeal}${randomIdNumber()}` }
                //   id={ rec.idMeal }
                //   imageSrc={ rec.strMealThumb }
                //   title={ rec.strMeal }
                //   index={ index }
                //   type={ type }
                //   data-testid={ `${index}-recomendation-card` }
                // />
              ))}
          </div>
          <p data-testid="instructions">{ele.strInstructions}</p>
          <p data-testid="video">{ele.strYoutube}</p>
        </div>))}
    </div>

  );
}
