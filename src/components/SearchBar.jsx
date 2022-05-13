import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import fetchIngredient from '../services/fetchIngredient';
import fetchByName from '../services/fetchByName';
import { saveSearchedRecepies } from '../Redux/actions/index';
import fetchFirstLetter from '../services/fetchFirstLetter';
import '../styles/components/SearchBar.css';

const FIRST_LETTER = 'first-letter';

export default function SearchBar() {
  const history = useHistory();
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
  // função refatorada com ajuda da monitoria, com instrução do
  // Edu e participação dos colegas de grupo Pérsio e Patrícia
  const handleSearchClick = async () => {
    let requestFetch;
    switch (radioSelected) {
    case 'ingredient': {
      requestFetch = fetchIngredient;
      break;
    }
    case 'name': {
      requestFetch = fetchByName;
      break;
    }
    case FIRST_LETTER: {
      requestFetch = fetchFirstLetter;
      break;
    }
    default: break;
    }
    const result = await requestFetch(type, searchInputValue);
    if (result.length === 1 && type === 'foods') {
      history.push(`/foods/${result[0].idMeal}`);
    } if (result.length === 1 && type === 'drinks') {
      history.push(`/drinks/${result[0].idDrink}`);
    }
    dispatch(saveSearchedRecepies(result));
    return result;
  };
  const handleRadioClick = (value) => {
    setRadioSelected(value);
  };

  return (
    <div className="d-flex flex-column align-items-center SearchBar">
      <input
        data-testid="search-input"
        type="text"
        value={ searchInputValue }
        onChange={ handleChange }
      />
      <div className="RadioSearchBar d-flex justify-content-evenly ">
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
