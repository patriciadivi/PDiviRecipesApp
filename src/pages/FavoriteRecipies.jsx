import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import Header from '../components/Header';
import ButtonFavoriteCategory from '../components/ButtonFavoriteCategory';

import '../styles/components/Header.css';

export default function FavoriteRecipies() {
  const [favoriteSave, setFavoriteSave] = useState([]);

  useEffect(() => {
    const favorite = localStorage.getItem('favoriteRecipes');
    // console.log(favorite);
    setFavoriteSave(JSON.parse(favorite));
  },
  []);

  console.log(favoriteSave);

  return (
    <div>
      <Header title="Favorite Recipes" searchEnabled={ false } />
      <h2>Suas Comidas Favoritas</h2>
      <ButtonFavoriteCategory />

      {favoriteSave.map((like, index) => (
        <div
          key={ like.id }
        >
          <img
            src={ like.image }
            alt={ `Receita de
              ${like.name}` }
            width="100"
            height="100"
            data-testid={ `${index}-horizontal-image` }
          />
          <p>{ (like.type === 'drink') ? like.type : 'food'}</p>
          <h4
            data-testid={ `${index}-horizontal-name` }
          >
            {like.name}
          </h4>
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {` ${like.nationality} - ${like.category}`}
          </p>

          { like.type === 'drink' ? (
            <p
              data-testid={ `${index}-horizontal-description` }
              type={ like.type }
              display="none"
            >
              {like.alcoholicOrNot}
            </p>
          ) : null}

          <button
            type={ like.type === 'drinks' ? 'button' : 'submit' }
            data-testid={ `${index}-horizontal-share-btn` }
          >
            <img
              src={ shareIcon }
              alt="Imagem para compartilhas a receita"
            />
          </button>

          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }

          >
            <img
              src={ blackHeartIcon }
              alt="Imagem para favoritar receita"
            />
          </button>
        </div>
      ))}
      ;
    </div>
  );
}
