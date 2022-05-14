import React from 'react';
import { useSelector } from 'react-redux';

import { Button } from 'react-bootstrap';

export default function ButtonFavorite() {
  const favoriteLocalStorange = useSelector((state) => state
    .reducer1.favoriteLocalStorange);

  // const {
  //   names,
  //   nameButton,
  //   type,
  // } = props;

  const handleClick = (paramentButton) => {
    const filterCategory = favoriteLocalStorange
      .filter((e) => e.type === paramentButton);

    const filterCategoryAll = favoriteLocalStorange.filter((e) => e);

    if (paramentButton === 'food' || paramentButton === 'drink') {
      console.log(paramentButton);
      console.log('filterCategory', filterCategory);
      return filterCategory;
    } if (paramentButton === 'all') {
      console.log('filterCategoryAll', filterCategoryAll);
      return filterCategoryAll;
    }
  };

  return (
    <section>
      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-all-btn"
        onClick={ () => handleClick('all') }
      >
        All
      </Button>

      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-food-btn"
        onClick={ () => handleClick('food') }
      >
        Foods
      </Button>

      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-drink-btn"
        onClick={ () => handleClick('drink') }
      >
        Drinks
      </Button>
    </section>

  );
}
