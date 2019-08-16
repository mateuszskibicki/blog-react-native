import Prismic from "prismic-javascript";
import { PRISMIC_URL, PRISMIC_SECRET } from "react-native-dotenv";
import {
  GET_ARTICLE_BY_UID,
  SET_ERROR_SINGLE_ARTICLE_TRUE,
  SET_CURRENT_ARTICLE_UID
} from "../types";
// loading
import { setLoadingStart, setLoadingStop } from "../common/loadingActions";
// helpers
import { singleArticleHelper } from "../../../helpers/article/ArticleHelpers";

// Set single article current UID (when it exists and we're not calling anything)
export const setCurrentArticleUID = ({ articleUID }) => dispatch => {
  dispatch({ type: SET_CURRENT_ARTICLE_UID, payload: { articleUID } });
};

// Get afticles data by page/tag/search_text/category from prismic CMS
export const getArticleByUID = ({ articleUID }) => async dispatch => {
  try {
    // Start loading
    dispatch(setLoadingStart());

    //Prismic connection
    const PrismicEndpoint = PRISMIC_URL || null;
    const PrismicToken = PRISMIC_SECRET || null;

    //If no settings -> return error
    if (!PrismicEndpoint || !PrismicToken) {
      dispatch({ type: SET_ERROR_SINGLE_ARTICLE_TRUE });
      dispatch(setLoadingStop());
      return;
    }

    const prismicConnection = await Prismic.getApi(PrismicEndpoint, {
      accessToken: PrismicToken
    });

    //Article query
    const data = await getSingleArticleByUIDPrismicQuery({
      prismicConnection,
      articleUID
    });

    //If there is no articles data -> put error true and stop loading
    if (!data) {
      dispatch({
        type: SET_ERROR_SINGLE_ARTICLE_TRUE,
        payload: { articleUID }
      });
      return dispatch(setLoadingStop());
    }

    //Sanitize data
    const articleData = singleArticleHelper(data);

    //Dispatch data to the reducer
    dispatch({
      type: GET_ARTICLE_BY_UID,
      payload: {
        articleData,
        articleUID
      }
    });

    //Set loading to false
    dispatch(setLoadingStop());
  } catch (err) {
    //If error return like there is no data and stop loading
    console.log("ERROR CATCH GET_ARTICLE_BY_UID");
    dispatch(setLoadingStop());
  }
};

export const getSingleArticleByUIDPrismicQuery = async ({
  prismicConnection,
  articleUID
}) => {
  if (!prismicConnection.getByUID || !articleUID) return null;

  return await prismicConnection.getByUID("single-article-mobile", articleUID, {
    fetchLinks: [
      "author.uid",
      "author.full_name",
      "author.short_description",
      "author.image_avatar"
    ]
  });
};
