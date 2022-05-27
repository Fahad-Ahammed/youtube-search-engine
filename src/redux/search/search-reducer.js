import { searchActionTypes } from "./search-types";

const INITIAL_STATE = {
  newSearchItem: "",
  searchResult: [],
  nextPageToken: "",
  searchCount: 15,
  offset: 50,
  login: false,
};

const searchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case searchActionTypes.TRENDING:
      return {
        ...state,
        searchResult: action.payload.items,
      };
    case searchActionTypes.NEW_SEARCH_TITLE:
      return {
        ...state,
        newSearchItem: action.payload,
      };
    case searchActionTypes.SEARCH_ITEM_RESULT:
      return {
        ...state,
        searchResult: action.payload.items,
        nextPageToken: action.payload.nextPageToken,
      };
    case searchActionTypes.INFINITE_SCROLL:
      return {
        ...state,
        searchResult: [...state.searchResult, ...action.payload.items],
        nextPageToken: action.payload.nextPageToken,
      };
    case searchActionTypes.LOGIN:
      return {
        ...state,
        login: !state.login,
      };
    default:
      return state;
  }
};

export default searchReducer;
