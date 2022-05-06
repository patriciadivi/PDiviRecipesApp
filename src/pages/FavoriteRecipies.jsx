import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap';
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
          <p
            data-testid={ `${index}-horizontal-top-text` }
          >
            {like.category}
          </p>
          <h4
            data-testid={ `${index}-horizontal-name` }
          >
            {like.name}
          </h4>
          <p
            data-testid={ `${index}-horizontal-done-date` }
          >
            {like.title}
          </p>
          <p
            data-testid={ `${index}-horizontal-description` }
          >
            {like.alcoholic}
          </p>
          <p>{like.nationality}</p>

          <button
            type="button"
            data-testid={ `${index}-horizontal-share-btn` }

          >
            compartilhar
          </button>

          <button
            type="button"
            data-testid={ `${index}-horizontal-favorite-btn` }
          >
            Favorite
          </button>

          {/* <Button
            variant="light"
            // data-testid="favorite-btn"
            type="button"
          >
            <img
              data-testid="favorite-btn"
              // src={ isFavorite ? blackHeartIcon : whiteHeartIcon }
              alt="share"
            />
          </Button> */}
        </div>
      ))}
      ;
    </div>
  );
}
