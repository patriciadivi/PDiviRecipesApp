import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { actFetchRecepiesByCategories, actFetchGenericRecepies } from '../Redux/actions';

export default function ButtonList(props) {
  const [lastSelection, setLastSelection] = useState('');
  const dispatch = useDispatch();
  const {
    names,
    type,
  } = props;

  const handleClick = (category) => {
    if (category === lastSelection || category === 'All') {
      dispatch(actFetchGenericRecepies(type));
      setLastSelection(() => '');
    } else {
      dispatch(actFetchRecepiesByCategories(type, category));
      setLastSelection(() => category);
    }
  };

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Button
        variant="light"
        size="sm"
        className="mr-2"
        onClick={ () => handleClick('All') }
      >
        All
      </Button>
      {names.map((btnName) => (
        <Button
          key={ `btn${btnName.strCategory}` }
          variant="light"
          size="sm"
          className="mr-2"
          data-testid={ `${btnName.strCategory}-category-filter` }
          onClick={ () => handleClick(btnName.strCategory) }
        >
          {btnName.strCategory}
        </Button>
      ))}
    </div>
  );
}

ButtonList.propTypes = {
  names: PropTypes.arrayOf(
    PropTypes.shape(
      { strCategory: PropTypes.string.isRequired },
    ).isRequired,
  ).isRequired,
  type: PropTypes.string.isRequired,
};
