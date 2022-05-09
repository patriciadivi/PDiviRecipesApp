import {
  ACTIVE_SEARCH_BAR,
  LOADING,
  SAVE_SEARCHED_RECEPIES,
  // SAVE_RECEPIE_ID
  SAVE_SEARCHED_INGREDIENTS,
  MAIN_PAGE_AVOID_FETCH,
  CANCEL_AVOID_FETCH,
} from '../actions/actionTypes';

const INITIAL_STATE = {
  searchBarActive: false,
  loading: false,
  searchedRecepies: [],
  // recepieId: '',
  searchedIngredients: [],
  avoidFetchAtMainPage: false,
};

export default function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case SAVE_SEARCHED_RECEPIES:
    console.log(action.payload);
    return {
      ...state,
      searchedRecepies: action.payload,
      loading: false,
    };
  case ACTIVE_SEARCH_BAR:
    return {
      ...state,
      searchBarActive: !state.searchBarActive,
    };
  // case SAVE_RECEPIE_ID:
  //   return {
  //     ...state,
  //     recepieId: action.payload,
  //   };
  case SAVE_SEARCHED_INGREDIENTS:
    return {
      ...state,
      searchedIngredients: action.payload,
      loading: false,
    };
  case MAIN_PAGE_AVOID_FETCH:
    return {
      ...state,
      avoidFetchAtMainPage: true,
    };
  case CANCEL_AVOID_FETCH:
    return {
      ...state,
      avoidFetchAtMainPage: false,
    };
  default:
    return state;
  }
}
