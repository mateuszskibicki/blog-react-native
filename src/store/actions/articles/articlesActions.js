import Prismic from "prismic-javascript";
import { PRISMIC_URL, PRISMIC_SECRET } from "react-native-dotenv";
import {
  GET_ALL_ARTICLES,
  GET_3_LAST_ARTICLES,
  SET_ERROR_ALL_ARTICLES_FALSE,
  SET_ERROR_ALL_ARTICLES_TRUE
} from "../types";
// loading
import { setLoadingStart, setLoadingStop } from "../common/loadingActions";
// helpers
import { articlesListHelper } from "../../../helpers/articles/ArticlesHelpers";

// Set articles error to true
export const setArticlesErrorToTrue = () => dispatch => {
  dispatch({ type: SET_ERROR_ALL_ARTICLES_TRUE });
};

// Set articles error to false
export const setArticlesErrorToFalse = () => dispatch => {
  dispatch({ type: SET_ERROR_ALL_ARTICLES_FALSE });
};

// Get afticles data by page/tag/search_text/category from prismic CMS
export const getAllArticles = ({
  page = "1",
  category = null,
  searchText = null,
  lastThree = false
} = {}) => async dispatch => {
  try {
    //Start loading
    dispatch(setLoadingStart());

    //Check if page exists
    if (!Number(page)) {
      dispatch({ type: SET_ERROR_ALL_ARTICLES_TRUE });
      dispatch(setLoadingStop());
      return;
    }

    //Check if page is correct
    const pageNumber = !Number(page) ? "1" : page;

    //Prismic connection
    const PrismicEndpoint = PRISMIC_URL || null;
    const PrismicToken = PRISMIC_SECRET || null;

    //If no settings -> return error
    if (!PrismicEndpoint || !PrismicToken) {
      dispatch({ type: SET_ERROR_ALL_ARTICLES_TRUE });
      dispatch(setLoadingStop());
      return;
    }

    const prismicConnection = await Prismic.getApi(PrismicEndpoint, {
      accessToken: PrismicToken
    });

    //Empty data at the very beginning
    let data = null;

    //Articles query
    if (lastThree) {
      data = await getLast3Articles({
        prismicConnection
      });
    } else if (!category && !searchText) {
      // all articles
      data = await getAllArticlesPrismicQuery({
        prismicConnection,
        page: pageNumber
      });
    } else if (category && !searchText) {
      // all articles based on category
      data = await getAllArticlesByCategoryPrismicQuery({
        prismicConnection,
        page: pageNumber,
        category
      });
    } else if (!category && searchText) {
      // all articles based on searchText
      data = await getAllArticlesBySearchTextPrismicQuery({
        prismicConnection,
        page: pageNumber,
        searchText
      });
    } else if (category && searchText) {
      // all articles based on category and searchText
      data = await getAllArticlesByCategoryAndSearchTextPrismicQuery({
        prismicConnection,
        page: pageNumber,
        category,
        searchText
      });
    }

    //If there is no articles data -> put error true and stop loading
    if (!data) {
      dispatch(setArticlesErrorToTrue());
      return dispatch(setLoadingStop());
    }

    //Sanitize data
    const articlesData = articlesListHelper(data);

    //If last 3 articles
    if (lastThree) {
      dispatch({
        type: GET_3_LAST_ARTICLES,
        payload: {
          articlesData
        }
      });
    } else {
      //Dispatch data to the reducer -> if search or category with new initial state, or with all pages and data
      dispatch({
        type: GET_ALL_ARTICLES,
        payload: {
          articlesData,
          page: pageNumber,
          totalPages: data.total_pages,
          category,
          searchText
        }
      });
    }

    //Set loading to false
    dispatch(setArticlesErrorToFalse());
    dispatch(setLoadingStop());
  } catch (err) {
    //If error return like there is no data and stop loading
    console.log("ERROR CATCH GET_ALL_ARTICLES");
    dispatch(setArticlesErrorToTrue());
    dispatch(setLoadingStop());
  }
};

export const queryCommonPart = {
  orderings: "[my.single-article-mobile.date desc]",
  fetch: [
    "single-article-mobile.uid",
    "single-article-mobile.title",
    "single-article-mobile.short_description",
    "single-article-mobile.categories",
    "single-article-mobile.tags",
    "single-article-mobile.date",
    "single-article-mobile.small_img",
    "single-article-mobile.xs_img",
    "single-article-mobile.author"
  ],
  fetchLinks: [
    "author.uid",
    "author.full_name",
    "author.short_description",
    "author.image_avatar"
  ]
};

export const getLast3Articles = async ({ prismicConnection }) => {
  if (!prismicConnection.query) return null;

  return await prismicConnection.query(
    Prismic.Predicates.at("document.type", "single-article-mobile"),
    {
      page: 1,
      ...queryCommonPart,
      pageSize: 3
    }
  );
};

export const getAllArticlesPrismicQuery = async ({
  prismicConnection,
  page
}) => {
  if (!prismicConnection.query) return null;

  return await prismicConnection.query(
    Prismic.Predicates.at("document.type", "single-article-mobile"),
    {
      page,
      ...queryCommonPart
    }
  );
};

export const getAllArticlesByCategoryPrismicQuery = async ({
  prismicConnection,
  page,
  category
}) => {
  if (!prismicConnection.query) return null;

  // if missing data at least last articles
  if (!category)
    return await getAllArticlesPrismicQuery({ prismicConnection, page });

  return await prismicConnection.query(
    [
      Prismic.Predicates.at("document.type", "single-article-mobile"),
      Prismic.Predicates.fulltext(
        "my.single-article-mobile.categories",
        category
      )
    ],
    {
      page,
      ...queryCommonPart
    }
  );
};

export const getAllArticlesBySearchTextPrismicQuery = async ({
  prismicConnection,
  page,
  searchText
}) => {
  if (!prismicConnection.query) return null;

  // if missing data at least last articles
  if (!searchText)
    return await getAllArticlesPrismicQuery({ prismicConnection, page });

  return await prismicConnection.query(
    [
      Prismic.Predicates.at("document.type", "single-article-mobile"),
      Prismic.Predicates.fulltext("document", searchText)
    ],
    {
      page,
      ...queryCommonPart
    }
  );
};

export const getAllArticlesByCategoryAndSearchTextPrismicQuery = async ({
  prismicConnection,
  page,
  category,
  searchText
}) => {
  if (!prismicConnection.query) return null;

  // if missing data at least last articles
  if (!category || !searchText)
    return await getAllArticlesPrismicQuery({ prismicConnection, page });

  return await prismicConnection.query(
    [
      Prismic.Predicates.at("document.type", "single-article-mobile"),
      Prismic.Predicates.fulltext(
        "my.single-article-mobile.categories",
        category
      ),
      Prismic.Predicates.fulltext("document", searchText)
    ],
    {
      page,
      ...queryCommonPart
    }
  );
};
