import React from 'react';
import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import { actFetchByIngredients } from '../Redux/actions';
// import randomIdNumber from '../services/randomIdNumber';

export default function IngredientCard(props) {
  const {
    title,
    urlEndImage,
    index,
    type,
  } = props;
  // const history = useHistory();
  const dispatch = useDispatch();

  const urlImage = type === 'foods'
    ? `https://www.themealdb.com/images/ingredients/${urlEndImage}.png`
    : `https://www.thecocktaildb.com/images/ingredients/${urlEndImage}.png`;

  const handleClick = (ingredient) => {
    dispatch(actFetchByIngredients(type, ingredient));
  };

  return (
    <Card
      style={ { width: '10rem' } }
      className="mt-3"
      // key={ `${title}${randomIdNumber()}` }
      data-testid={ `${index}-ingredient-card` }
      onClick={ () => handleClick(title) }
    >
      {/* <Link to={ `/${type}/${id}` } className="stretched-link" /> */}
      <Card.Img
        variant="top"
        src={ urlImage }
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

IngredientCard.propTypes = {
  urlEndImage: PropTypes.string,
  title: PropTypes.string,
  index: PropTypes.number,
  type: PropTypes.string,
};

IngredientCard.defaultProps = {
  urlEndImage: '',
  title: '',
  index: 0,
  type: '',
};
