import {
  ACTIVE_SEARCH_BAR,
  LOADING,
  SAVE_SEARCHED_RECEPIES } from '../actions/actionTypes';

const INITIAL_STATE = {
  searchBarActive: false,
  loading: false,
  searchedRecepies: [],
};

export default function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: !state.loading,
    };
  case SAVE_SEARCHED_RECEPIES:
    return {
      ...state,
      searchedRecepies: action.payload,
    };
  case ACTIVE_SEARCH_BAR:
    return {
      ...state,
      searchBarActive: !state.searchBarActive,
    };
  default:
    return state;
  }
}
