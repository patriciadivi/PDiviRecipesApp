import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import fetchByIngredient from '../services/fetchByIngredient';
import fetchByName from '../services/fetchByName';
import { saveSearchedRecepies } from '../Redux/actions/index';
import fetchFirstLetter from '../services/fetchFirstLetter';

export default function SearchBar() {
  const [radioSelected, setRadioSelected] = useState('');
  const [searchInputValue, setSearchInputValue] = useState('');
  const location = useLocation();
  const type = location.pathname.includes('foods') ? 'foods' : 'drinks';
  const dispatch = useDispatch();

  const handleChange = ({ target: { value } }) => {
    setSearchInputValue(value);
    // eslint-disable-next-line sonarjs/no-duplicate-string
    if (value.length > 1 && radioSelected === 'first-letter') {
      global.alert('Your search must have only 1 (one) character');
    }
  };

  const handleSearchClick = async () => {
    switch (radioSelected) {
    case 'ingredient': {
      const searchByIngredient = await fetchByIngredient(type, searchInputValue);
      console.log(searchByIngredient);
      dispatch(saveSearchedRecepies(searchByIngredient.data.meals));
      return searchByIngredient;
    }
    case 'name': {
      const searchByName = await fetchByName(searchInputValue);
      dispatch(saveSearchedRecepies(searchByName));
      return searchInputValue;
    }
    case 'first-letter': {
      const searchByFirstLetter = await fetchFirstLetter(searchInputValue);
      console.log(searchByFirstLetter);
      dispatch(saveSearchedRecepies(searchByFirstLetter));
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
            value="first-letter"
            onClick={ () => handleRadioClick('first-letter') }
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
