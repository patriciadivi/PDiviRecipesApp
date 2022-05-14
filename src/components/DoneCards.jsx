import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';
import randomIdNumber from '../services/randomIdNumber';

export default function DoneCards(
  { type, id, imageSrc, title, index, category, nationality, date, tags, alcoholicOrNot },
) {
  const [showText, setShowText] = useState(false);
  const timeShowingText = 3000;
  const removeText = () => {
    setShowText(() => false);
  };
  console.log(type);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href
      .replace('done-recipes', `${alcoholicOrNot ? 'drinks' : 'foods'}/${id}`));
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
            {nationality && `${nationality} - ${category}`}
            {alcoholicOrNot && `${category} - ${alcoholicOrNot}`}
          </p>
          <Card.Title data-testid={ `${index}-horizontal-name` }>
            { title }
          </Card.Title>
          <p data-testid={ `${index}-horizontal-done-date` }>
            {`Done in: ${date}`}
          </p>
          <br />
          {tags.length > 0
            && tags.map((e) => (
              <p
                key={ `${e}${randomIdNumber()}` }
                data-testid={ `${index}-${e}-horizontal-tag` }
              >
                {e}
              </p>))}
          <Button
            variant="light"
            onClick={ () => copyToClipboard() }
            type="button"
          >
            <img
              src={ shareIcon }
              data-testid={ `${index}-horizontal-share-btn` }
              alt="share"
            />
          </Button>
          {showText && <p>Link copied!</p>}
        </Card.Body>
      </div>
    </Card>
  );
}

DoneCards.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  nationality: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  alcoholicOrNot: PropTypes.string.isRequired,
};
