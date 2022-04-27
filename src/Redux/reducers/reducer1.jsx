import { ACTIVE_SEARCH_BAR } from '../actions/actionTypes';

const INITIAL_STATE = {
  searchBarActive: false,
};

export default function reducer1(state = INITIAL_STATE, action) {
  switch (action.type) {
  case ACTIVE_SEARCH_BAR:
    return {
      ...state,
      searchBarActive: !state.searchBarActive,
    };
  default:
    return state;
  }
}
