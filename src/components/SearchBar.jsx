import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchByIngredient from '../services/fetchByIngredient';
import fetchByName from '../services/fetchByName';
import { saveSearchedRecepies } from '../Redux/actions/index';
import fetchFirstLetter from '../services/fetchFirstLetter';

const FIRST_LETTER = 'first-letter';

export default function SearchBar() {
  const [radioSelected, setRadioSelected] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'foods' : 'drinks';
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setSearchInputValue(value);

    if (value.length > 1 && radioSelected === FIRST_LETTER) {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const handleSearchClick = async () => {
    switch (radioSelected) {
    case 'ingredient': {
      const searchByIngredient = await fetchByIngredient(type, searchInputValue);
      console.log(searchByIngredient);
      dispatch(saveSearchedRecepies(type, searchByIngredient.data.meals));
      return searchByIngredient;
    }
    case 'name': {
      const searchByName = await fetchByName(type, searchInputValue);
      console.log(searchByName);
      dispatch(saveSearchedRecepies(searchByName));
      return searchInputValue;
    }
    case FIRST_LETTER: {
      const searchByFirstLetter = await fetchFirstLetter(type, searchInputValue);
      console.log(searchByFirstLetter);
      dispatch(saveSearchedRecepies(type, searchByFirstLetter));
      return searchInputValue;
    }
    default: break;
    }
  };

  const handleRadioClick = (value) => {
    setRadioSelected(value);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <input
        data-testid="search-input"
        type="text"
        value={ searchInputValue }
        onChange={ handleChange }
      />
      <div className="d-flex justify-content-evenly">
        <label
          htmlFor="ingredient"
        >
          <input
            type="radio"
            name="search-bar-radio"
            data-testid="ingredient-search-radio"
            id="ingredient"
            value="ingredient"
            onClick={ () => handleRadioClick('ingredient') }
          />
          Ingredient
        </label>
        <label
          htmlFor="name"
        >
          <input
            type="radio"
            name="search-bar-radio"
            data-testid="name-search-radio"
            id="name"
            value="name"
            onClick={ () => handleRadioClick('name') }
          />
          Name
        </label>
        <label
          htmlFor="first-letter"
        >
          <input
            type="radio"
            name="search-bar-radio"
            data-testid="first-letter-search-radio"
            id="first-letter"
            onClick={ () => handleRadioClick(FIRST_LETTER) }
          />
          First Letter
        </label>
      </div>
      <button
        type="button"
        data-testid="exec-search-btn"
        onClick={ () => handleSearchClick() }
      >
        Buscar
      </button>
    </div>
  );
}
