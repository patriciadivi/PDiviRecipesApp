import React from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';

export default function RecepieCard(
  { id, imageSrc, title, index, category, date, tags },
) {
  return (

    <Card
      style={ { width: '10rem' } }
      className="mt-3 d-flex"
      key={ id }
      data-testid={ `${index}-recipe-card` }
    >
      {/* <Link to={ `/${type}/${id}` } className="stretched-link" /> */}
      <Card.Img
        variant="top"
        src={ imageSrc }
        data-testid={ `${index}-horizontal-image` }
      />
      <Card.Body>
        <p data-testid={ `${index}-horizontal-top-text` }>
          {category}
        </p>
        <Card.Title data-testid={ `${index}-horizontal-name` }>
          { title }
        </Card.Title>
        <ListGroup variant="flush">
          <ListGroup.Item data-testid={ `${index}-horizontal-done-date` }>
            {date}
          </ListGroup.Item>
          <ListGroup.Item data-testid={ `${index}-${tagName}-horizontal-tag` }>
            {tags}
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

RecepieCard.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
