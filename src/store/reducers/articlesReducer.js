import {
  GET_ALL_ARTICLES,
  GET_ALL_ARTICLES_INITIAL_STATE,
  SET_ERROR_ALL_ARTICLES_FALSE,
  SET_ERROR_ALL_ARTICLES_TRUE
} from "../actions/types";

export const initialState = {
  error: false,
  currentPage: null,
  totalPages: null,
  category: null,
  searchText: null,
  SEO: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ERROR_ALL_ARTICLES_FALSE:
      return {
        ...state,
        error: false
      };
    case SET_ERROR_ALL_ARTICLES_TRUE:
      return {
        ...state,
        error: true
      };
    case GET_ALL_ARTICLES:
      return {
        ...state,
        currentPage: action.payload.page,
        totalPages: action.payload.totalPages,
        category: action.payload.category,
        searchText: action.payload.searchText,
        SEO: action.payload.SEO,
        [action.payload.page]: action.payload.articlesData
      };
    case GET_ALL_ARTICLES_INITIAL_STATE:
      return {
        ...initialState,
        currentPage: action.payload.page,
        totalPages: action.payload.totalPages,
        category: action.payload.category,
        searchText: action.payload.searchText,
        SEO: action.payload.SEO,
        [action.payload.page]: action.payload.articlesData
      };
    default:
      return state;
  }
}
