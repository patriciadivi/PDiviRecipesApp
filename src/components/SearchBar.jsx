import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <input
        data-testid="search-input"
        type="text"
      />
      <div className="d-flex justify-content-evenly">
        <label
          htmlFor="ingredient"
        >
          <input
            type="radio"
            data-testid="ingredient-search-radio"
            id="ingredient"
            value="ingredient"
          />
          Ingredient
        </label>
        <label
          htmlFor="name"
        >
          <input
            type="radio"
            data-testid="name-search-radio"
            id="name"
            value="name"
          />
          Name
        </label>
        <label
          htmlFor="first-letter"
        >
          <input
            type="radio"
            data-testid="first-letter-search-radio"
            id="first-letter"
            value="first-letter"
          />
          First Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => {} }
      >
        Buscar
      </button>
    </div>
  );
}
