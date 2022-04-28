import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function RecepieCard(props) {
  const {
    id,
    imageSrc,
    title,
    index,
  } = props;

  return (
    <Card
      style={ { width: '10rem' } }
      className="mt-3"
      key={ id }
      data-testid={ `${index}-recipe-card` }
    >
      <Card.Img
        variant="top"
        src={ imageSrc }
        data-testid={ `${index}-card-img` }
      />
      <Card.Body>
        <Card.Title data-testid={ `${index}-card-name` }>
          { title }
        </Card.Title>
      </Card.Body>
    </Card>
  );
}

RecepieCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
