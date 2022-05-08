import React, { useEffect, useState } from 'react';
// import Button from 'react-bootstrap';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';

import Header from '../components/Header';
import ButtonFavoriteCategory from '../components/ButtonFavoriteCategory';

import '../styles/components/Header.css';

export default function FavoriteRecipies() {
  const [favoriteSave, setFavoriteSave] = useState([]);
  const [copyTextToShow, setCopyTextToShow] = useState(false);
  const numberRemoveTextToScreen = 3000;

  const removeTextToScreen = () => {
    setCopyTextToShow(() => false);
  };

  const showCopyToScreen = () => {
    setCopyTextToShow(true);
    setTimeout(removeTextToScreen, numberRemoveTextToScreen);
  };

  const copyToClipboard01 = (e) => {
    // Pega o endereço da página atual
    const { id } = e.target;
    const data = `http://localhost:3000/foods/${id}`;
    navigator.clipboard.writeText(data).then(() => {
      showCopyToScreen();
    }, () => {
      console.error('Unable to write to clipboard. :-(');
    });
  };

  const unfavoriteFromLocalStorange = ({ target }) => {
    const { id } = target;
    console.log(id);
    const favorite = localStorage.getItem('favoriteRecipes');

    const result = JSON.parse(favorite);
    console.log(result);

    const newFavorite = result.filter((e) => e.id !== id);
    console.log(newFavorite);
    localStorage.setItem('favoriteRecipes', JSON.stringify(newFavorite));
    setFavoriteSave(newFavorite);

    return newFavorite;
  };

  useEffect(() => {
    const favorite = localStorage.getItem('favoriteRecipes');
    if (favorite) {
      console.log(favorite);
      setFavoriteSave(JSON.parse(favorite));
    }
  },
  []);

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
            id={ like.id }
            src={ like.image }
            alt={ `Receita de
              ${like.name}` }
            width="100"
            height="100"
            data-testid={ `${index}-horizontal-image` }
          />
          { like.type === 'drink' && (
            <p
              data-testid={ `${index}-horizontal-top-text` }
              type={ like.type }
            >
              {like.alcoholicOrNot}
            </p>
          )}
          <h4
            data-testid={ `${index}-horizontal-name` }
          >
            {like.name}
          </h4>

          {like.type === 'food' && (
            <p
              data-testid={ `${index}-horizontal-top-text` }
            >
              {` ${like.nationality} - ${like.category}`}
            </p>
          )}

          {copyTextToShow
          && <div><p>Link copied!</p></div>}
          <button
            type="button"
            onClick={ copyToClipboard01 }
          >
            <img
              src={ shareIcon }
              id={ like.id }
              alt="Imagem para compartilhas a receita"
              data-testid={ `${index}-horizontal-share-btn` }
            />
          </button>

          <button
            type="button"
            onClick={ unfavoriteFromLocalStorange }
          >
            <img
              src={ blackHeartIcon }
              id={ like.id }
              alt="Imagem para favoritar receita"
              data-testid={ `${index}-horizontal-favorite-btn` }
            />
          </button>
        </div>
      ))}
    </div>
  );
}
