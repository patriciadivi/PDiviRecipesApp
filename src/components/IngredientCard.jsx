import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

export default function RecepieCard(props) {
  const {
    id,
    imageSrc,
    title,
    index,
    // type,
  } = props;

  return (

    <Card
      style={ { width: '10rem' } }
      className="mt-3"
      key={ id }
      data-testid={ `${index}-ingredient-card` }
    >
      {/* <Link to={ `/${type}/${id}` } className="stretched-link" /> */}
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
  id: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
  // type: PropTypes.string,
};

RecepieCard.defaultProps = {
  id: '',
  imageSrc: '',
  title: '',
  index: 0,
  // type: '',
};
