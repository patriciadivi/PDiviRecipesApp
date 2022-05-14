import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';

export default function DoneCards(
  { id, imageSrc, title, index, category, date, tags },
) {
  const [showText, setShowText] = useState(false);
  const timeShowingText = 3000;
  const removeText = () => {
    setShowText(() => false);
  };
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    setShowText(() => true);
    setTimeout(removeText, timeShowingText);
  };
  return (

    <Card
      style={ { width: '20rem' } }
      className="mt-3"
      key={ id }
      data-testid={ `${index}-recipe-card` }
    >
      {/* <Link to={ `/${type}/${id}` } className="stretched-link" /> */}
      <div className="d-flex">
        <Card.Img
          // variant="top"
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
          <p data-testid={ `${index}-horizontal-done-date` }>
            {`Done in: ${date}`}
          </p>
          <br />
          <p data-testid={ `${index}-${tags}-horizontal-tag` }>
            {tags}
          </p>
          <Button
            variant="light"
            data-testid={ `${index}-horizontal-share-btn` }
            onClick={ () => copyToClipboard() }
            type="button"
          >
            <img src={ shareIcon } alt="share" />
          </Button>
          {showText && <p>Link copied!</p>}
        </Card.Body>
      </div>
    </Card>
  );
}

DoneCards.propTypes = {
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
