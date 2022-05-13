import React, { useEffect, useState } from 'react';
// import { Button } from 'react-bootstrap';
import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionsFavoriteConvertLocalStorage } from '../Redux/actions/index';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import Header from '../components/Header';
// import ButtonFavoriteCategory from '../components/ButtonFavoriteCategory';
import '../styles/components/Header.css';
import '../styles/pages/PagesFavoriteRecipies.css';

export default function FavoriteRecipies() {
  const favoriteLocalStorange = useSelector((state) => state
    .reducer1.favoriteLocalStorange);
  const [favoriteSave, setFavoriteSave] = useState([]);
  const [copyTextToShow, setCopyTextToShow] = useState(false);
  const numberRemoveTextToScreen = 3000;
  const dispatch = useDispatch();
  const history = useHistory();

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

  const dispatchConvertLocalStorage = (favoriteConvertLocalStorage) => {
    console.log('dispatchConvertLocalStorage');
    dispatch(actionsFavoriteConvertLocalStorage(favoriteConvertLocalStorage));
  };

  useEffect(() => {
    const favorite = localStorage.getItem('favoriteRecipes');
    if (favorite) {
      const favoriteConvertLocalStorage = JSON.parse(favorite);
      setFavoriteSave(favoriteConvertLocalStorage);
      dispatchConvertLocalStorage(favoriteConvertLocalStorage);
    }
  }, []);

  const handleClick = (paramentButton) => {
    const favoriteSaveFilter = favoriteSave;
    const filterCategory = favoriteSaveFilter
      .filter((e) => e.type === paramentButton);

    const filterCategoryAll = favoriteLocalStorange.filter((e) => e);

    if (paramentButton === 'food' || paramentButton === 'drink') {
      console.log(paramentButton);
      console.log('filterCategory', filterCategory);
      return setFavoriteSave(filterCategory);
    } if (paramentButton === 'all') {
      console.log('filterCategoryAll', filterCategoryAll);
      return setFavoriteSave(filterCategoryAll);
    }
  };

  const toDateions = (id, type) => {
    // const { id } = e.target;
    // console.log(target);
    console.log(type);
    console.log(id);
    if (type === 'drink') {
      return history.push(`/drinks/${id}`);
    }
    return history.push(`/foods/${id}`);
  };

  return (
    <section className="FavoriteRecipies">
      <Header title="Favorite Recipes" searchEnabled={ false } />

      {/* <ButtonFavoriteCategory /> */}
      <div className="FavoriteRecipiesDIV">

        <div className="FavoriteRecipiesButton">
          <button
            type="button"
            data-testid="filter-by-all-btn"
            className="BtnFavoriteFilter"
            onClick={ () => handleClick('all') }
          >
            All
          </button>

          <button
            type="button"
            data-testid="filter-by-food-btn"
            className="BtnFavoriteFilter"
            onClick={ () => handleClick('food') }
          >
            Foods
          </button>

          <button
            type="button"
            data-testid="filter-by-drink-btn"
            className="BtnFavoriteFilter"
            onClick={ () => handleClick('drink') }
          >
            Drinks
          </button>
        </div>

        {favoriteSave.map((like, index) => (
          <div
            key={ like.id }
            className="FavoriteRecipiesCardDIV"
          >
            <button
              type="button"
              onClick={ () => toDateions(like.id, like.type) }
              className="BtnFavoriteCardIMG"

            >
              <img
                id={ like.id }
                type={ like.type }
                src={ like.image }
                alt={ `Receita de
            ${like.name}` }
                width="100"
                height="100"
                data-testid={ `${index}-horizontal-image` }
              />
            </button>
            <div>

              { like.type === 'drink' && (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                  type={ like.type }
                >
                  {like.alcoholicOrNot}
                </p>
              )}
              <Link
                to={ `/${like.type}s/${like.id}` }
                className="FavoriteRecipiesCardLink"
              >
                {/* type="button"
            onClick={ () => toDateions(like.id, like.type) } */}
                <h4
                  data-testid={ `${index}-horizontal-name` }
                  id={ like.id }
                  type={ like.type }
                >
                  {like.name}
                </h4>
              </Link>

              {like.type === 'food' && (
                <p
                  data-testid={ `${index}-horizontal-top-text` }
                >
                  {` ${like.nationality} - ${like.category}`}
                </p>
              )}
            </div>

            {copyTextToShow
          && <div><p>Link copied!</p></div>}
            <div className="FavoriteLikeDIV">

              <button
                type="button"
                onClick={ copyToClipboard01 }
                className="copyToClipboard"
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
                className="LikeButton"
              >
                <img
                  src={ blackHeartIcon }
                  id={ like.id }
                  alt="Imagem para favoritar receita"
                  data-testid={ `${index}-horizontal-favorite-btn` }
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
