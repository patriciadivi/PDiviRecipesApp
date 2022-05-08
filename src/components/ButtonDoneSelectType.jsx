import React from 'react';
// import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { actFetchSuprise } from '../Redux/actions';
// import fetchSurprise from '../services/fetchSurprise';

export default function ButtonDoneSelectType({ handleClick }) {
  return (
    <div className="ButtonList d-flex flex-wrap justify-content-center">
      <Button
        data-testid="filter-by-all-btn"
        variant="light"
        size="lg"
        className="mx-2"
        onClick={ () => handleClick() }
      >
        All
      </Button>
      <Button
        data-testid="filter-by-all-btn"
        variant="light"
        size="lg"
        className="mx-2"
        onClick={ () => handleClick('food') }
      >
        Foods
      </Button>
      <Button
        data-testid="filter-by-all-btn"
        variant="light"
        size="lg"
        className="mx-2"
        onClick={ () => handleClick('drink') }
      >
        Drinks
      </Button>
    </div>
  );
}

ButtonDoneSelectType.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
