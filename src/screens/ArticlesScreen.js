import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllArticles } from "../store/actions/articles/articlesActions";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import ArticlesScreenContainer from "../components/screen-container/ArticlesScreenContainer";

const ArticlesScreen = ({ articles, getAllArticles, navigation, loading }) => {
  const {
    category,
    currentPage,
    totalPages,
    error,
    //lastThree,
    searchText
  } = articles;

  const categoryParam = navigation.getParam("category") || null;
  const searchTextParam = navigation.getParam("searchText") || null;
  const pageParam = navigation.getParam("page") || 1;

  // grab all articles
  useEffect(() => {
    !loading.loading &&
      (category !== categoryParam ||
        searchText !== searchTextParam ||
        Number(currentPage) !== Number(pageParam)) &&
      getAllArticles({
        category: categoryParam,
        searchText: searchTextParam,
        page: pageParam
      });
  }, [categoryParam, searchTextParam, pageParam]);

  if (!articles[currentPage]) return null;

  //display component
  return (
    <ContainerScroll>
      <ArticlesScreenContainer
        category={category}
        searchText={searchText}
        totalPages={totalPages}
        currentPage={currentPage}
        error={error}
        articles={articles[currentPage]}
      />
    </ContainerScroll>
  );
};

//nav options
ArticlesScreen.navigationOptions = {
  header: null
};

//proptypes
ArticlesScreen.propTypes = {
  getAllArticles: PropTypes.func,
  articles: PropTypes.shape({
    category: PropTypes.string,
    currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    error: PropTypes.bool,
    lastThree: PropTypes.arrayOf(PropTypes.object),
    searchText: PropTypes.string
  })
};

//Redux logic
const mapStateToProps = ({ articles, loading }) => {
  return { articles, loading };
};

const mapDispatchToProps = {
  getAllArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesScreen);
