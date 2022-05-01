import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import fetchSurprise from '../services/fetchSurprise';

export default function BtnsExploreRecepies(props) {
  const {
    type,
  } = props;
  const history = useHistory();

  const gerRandomRecepie = async () => {
    const { status, data } = await fetchSurprise(type);
    if (status === 'ok' && type === 'foods') {
      history.push(`/${type}/${data.meals.idMeal}`);
    }
    if (status === 'ok' && type === 'drinks') {
      history.push(`/${type}/${data.drinks.idDrink}`);
    }
  };

  return (
    <div>
      <Button
        variant="light"
        data-testid="explore-by-ingredient"
        size="lg"
        className="mt-3 mx-3"
        onClick={ () => history.push(`/explore/${type}/ingredients`) }
      >
        By Ingredient
      </Button>
      {type === 'foods'
      && (
        <Button
          variant="light"
          data-testid="explore-by-nationality"
          size="lg"
          className="mt-3 mx-3"
          onClick={ () => history.push(`/explore/${type}/nationalities`) }
        >
          By Nationality
        </Button>)}
      <Button
        variant="light"
        data-testid="explore-surprise"
        size="lg"
        className="mt-3 mx-3"
        onClick={ () => gerRandomRecepie() }
      >
        Surprise me!
      </Button>
    </div>
  );
}

BtnsExploreRecepies.propTypes = {
  type: PropTypes.string.isRequired,
};
