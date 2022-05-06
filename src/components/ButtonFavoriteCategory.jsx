import React from 'react';
import { Button } from 'react-bootstrap';

export default function ButtonFavorite() {
  // const {
  //   names,
  //   nameButton,
  //   type,
  // } = props;

  return (
    <section>
      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-all-btn"
      >
        All
      </Button>

      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-food-btn"
      >
        Foods
      </Button>

      <Button
        type="button"
        // data-testid={ `${index}-horizontal-share-btn` }
        data-testid="filter-by-drink-btn"
      >
        Drinks
      </Button>
    </section>

  );
}
