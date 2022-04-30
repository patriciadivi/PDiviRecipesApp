import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function BtnsExploreRecepies(props) {
  const {
    type,
  } = props;
  const history = useHistory();
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
        // onClick={ () => history.push('/explore/foods') }
      >
        Suprise me!
      </Button>
    </div>
  );
}

BtnsExploreRecepies.propTypes = {
  type: PropTypes.string.isRequired,
};
