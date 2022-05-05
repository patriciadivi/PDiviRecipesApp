import React from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
// import Card from 'react-bootstrap/Card';
// import { actFetchByIngredients } from '../Redux/actions';
// import randomIdNumber from '../services/randomIdNumber';

export default function IngredientCard(props) {
  const {
    title,
    urlEndImage,
    index,
    type,
  } = props;
  const history = useHistory();
  const dispatch = useDispatch();

  const urlImage = type === 'foods'
    ? `https://www.themealdb.com/images/ingredients/${urlEndImage}.png`
    : `https://www.thecocktaildb.com/images/ingredients/${urlEndImage}.png`;

  const handleClick = (ingredient) => {
    dispatch(actFetchByIngredients(type, ingredient));
    history.push(`/${type}`);
  };

  return (
    <div>
      {(!recipieDone && !recipieStarted)
          && (
            <Button data-testid="start-recipe-btn" type="button">
              Start Recepie
            </Button>)}
      {(!recipieDone && recipieStarted)
          && (
            <Button data-testid="start-recipe-btn" type="button">
              Continue Recipe
            </Button>)}
    </div>
  );
}

IngredientCard.propTypes = {
  urlEndImage: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
};

IngredientCard.defaultProps = {
  urlEndImage: '',
  title: '',
  index: 0,
  type: '',
};
