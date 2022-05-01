import fetchGenericRecepies from '../../services/fetchGenericRecepies';
import fetchIngredients from '../../services/fetchIngredients';
import fetchRecepiesByCategories from '../../services/fetchRecepiesByCategories';
// import fetchSurprise from '../../services/fetchSurprise';

import {
  USER_LOGIN, USER_LOGOUT01,
  ACTIVE_SEARCH_BAR,
  SAVE_SEARCHED_RECEPIES,
  LOADING,
  // SAVE_RECEPIE_ID,
  SAVE_SEARCHED_INGREDIENTS,
} from './actionTypes';

export const minhaAction = (value) => ({ type: USER_LOGIN, value });
export const minhaAction01 = (value) => ({ type: USER_LOGOUT01, value });
export const searchBar = () => ({ type: ACTIVE_SEARCH_BAR });

export const loading = () => ({
  type: LOADING,
});

export const saveSearchedRecepies = (payload) => ({
  type: SAVE_SEARCHED_RECEPIES, payload,
});

// export const saveRecepieId = (payload) => ({
//   type: SAVE_RECEPIE_ID, payload,
// });

export function actFetchGenericRecepies(type) {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetchGenericRecepies(type);
    if (response.status === 'ok') {
      const numberOfRecepies = 12;
      let recepies = [];
      if (type === 'foods') { recepies = response.data.meals.slice(0, numberOfRecepies); }
      if (type === 'drinks') {
        recepies = response.data.drinks.slice(0, numberOfRecepies);
      }
      dispatch(saveSearchedRecepies(recepies));
    }
  };
}

export function actFetchRecepiesByCategories(type, category) {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetchRecepiesByCategories(type, category);
    if (response.status === 'ok') {
      const numberOfRecepies = 12;
      let recepies = [];
      if (type === 'foods') { recepies = response.data.meals.slice(0, numberOfRecepies); }
      if (type === 'drinks') {
        recepies = response.data.drinks.slice(0, numberOfRecepies);
      }
      dispatch(saveSearchedRecepies(recepies));
    }
  };
}

// export function actFetchSuprise(type) {
//   console.log(type);
//   return async (dispatch) => {
//     const response = await fetchSurprise(type);
//     console.log(response);
//     if (response.status === 'ok') {
//       console.log(response.recepieId);
//       dispatch(saveRecepieId(response.recepieId));
//     }
//   };
// }

export const saveSearchedIngredients = (payload) => ({
  type: SAVE_SEARCHED_INGREDIENTS, payload,
});

export function actFetchIngredients(type) {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetchIngredients(type);
    if (response.status === 'ok') {
      const numberOfIngredients = 12;
      let ingredients = [];
      if (type === 'foods') {
        ingredients = response.data.meals.slice(0, numberOfIngredients)
          .map((ing) => [ing.strIngredient,
            ing.strIngredient.concat('-Small')]);
      }
      if (type === 'drinks') {
        ingredients = response.data.drinks.slice(0, numberOfIngredients)
          .map((ing) => [ing.strIngredient1,
            ing.strIngredient1.concat('-Small')]);
      }

      // console.log(ingredients);
      dispatch(saveSearchedIngredients(ingredients));
    }
  };
}
