import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

export default function ButtonList(props) {
  const {
    names,
  } = props;

  return (
    <div className="d-flex flex-wrap justify-content-around">
      <Button variant="light" size="sm">
        All
      </Button>
      {names.map((btnName) => (
        <Button
          key={ `btn${btnName.strCategory}` }
          variant="light"
          size="sm"
          data-testid={ `${btnName.strCategory}-category-filter` }
        >
          {btnName.strCategory}
        </Button>
      ))}
      ;
    </div>
  );
}

ButtonList.propTypes = {
  names: PropTypes.arrayOf().isRequired,
};
