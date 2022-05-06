import React from 'react';

export default function ButtonFavorite() {
  // const {
  //   names,
  //   nameButton,
  //   type,
  // } = props;

  return (
    <section>
      <button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-all-btn"
      >
        All
      </button>

      <button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-food-btn"
      >
        Foods
      </button>

      <button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </button>
    </section>

  );
}
