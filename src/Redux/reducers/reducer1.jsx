import {
  ACTIVE_SEARCH_BAR,
  LOADING,
  SAVE_SEARCHED_RECEPIES,
  // SAVE_RECEPIE_ID
} from '../actions/actionTypes';

const INITIAL_STATE = {
  searchBarActive: false,
  loading: false,
  searchedRecepies: [],
  // recepieId: '',
};

export default function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
  case LOADING:
    return {
      ...state,
      loading: true,
    };
  case SAVE_SEARCHED_RECEPIES:
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
  default:
    return state;
  }
}
