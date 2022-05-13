import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { actFetchSuprise } from '../Redux/actions';
import fetchSurprise from '../services/fetchSurprise';
import '../styles/components/BtnsExploreRecepies.css';

export default function BtnsExploreRecepies(props) {
  const {
    type,
  } = props;
  const history = useHistory();
  // const dispatch = useDispatch();

  const gerRandomRecepie = async () => {
    const { status, recepieId } = await fetchSurprise(type);
    if (status === 'ok') {
      history.push(`/${type}/${recepieId}`);
    }
  };

  return (
    <div className="BtnsExploreRecepies">
      <Button
        variant="light"
        data-testid="explore-by-ingredient"
        size="lg"
        className={ type === 'foods' ? 'btnIngredient' : 'btnIngredientDrinks' }
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
          className="btnNationality"
          onClick={ () => history.push(`/explore/${type}/nationalities`) }
        >
          By Nationality
        </Button>)}
      <Button
        variant="light"
        data-testid="explore-surprise"
        size="lg"
        className={ type === 'foods' ? 'btnSurprise' : 'btnSurpriseDrinks' }
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
