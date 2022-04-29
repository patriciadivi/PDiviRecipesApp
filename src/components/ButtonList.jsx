import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { actFetchRecepiesByCategories } from '../Redux/actions';
// import { actFetchGenericRecepies } from '../Redux/actions';

export default function ButtonList(props) {
  const dispatch = useDispatch();
  const {
    names,
    type,
  } = props;

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <Button variant="light" size="sm" className="mr-2">
        All
      </Button>
      {names.map((btnName) => (
        <Button
          key={ `btn${btnName.strCategory}` }
          variant="light"
          size="sm"
          className="mr-2"
          data-testid={ `${btnName.strCategory}-category-filter` }
          onClick={ () => dispatch(
            actFetchRecepiesByCategories(type, btnName.strCategory),
          ) }
          // onClick={ () => dispatch(
          //   actFetchRecepiesByCategories(type, btnName.strCategory),
          // ) }
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
