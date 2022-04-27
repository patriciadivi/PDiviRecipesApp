import fetchGenericRecepies from '../../services/fetchGenericRecepies';
import {
  USER_LOGIN, USER_LOGOUT01,
  ACTIVE_SEARCH_BAR,
  SAVE_RECEPIES,
  LOADING } from './actionTypes';

export const minhaAction = (value) => ({ type: USER_LOGIN, value });
export const minhaAction01 = (value) => ({ type: USER_LOGOUT01, value });
export const searchBar = () => ({ type: ACTIVE_SEARCH_BAR });

export const loading = () => ({
  type: LOADING,
});

export const saveRecepies = (payload) => ({
  type: SAVE_RECEPIES, payload,
});

export function actFetchGenericRecepies() {
  return async (dispatch) => {
    dispatch(loading());
    const response = await fetchGenericRecepies();
    if (response.status === 'ok') {
      const numberOfRecepies = 12;
      const recipes = response.data.meals.slice(0, numberOfRecepies);
      dispatch(saveRecepies(recipes));
    }
  };
}
