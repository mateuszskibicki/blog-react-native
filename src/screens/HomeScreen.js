import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getAllArticles } from "../store/actions/articles/articlesActions";
import ContainerScroll from "../components/common/layout/ContainerScroll";
import HomeScreenContainer from "../components/screen-container/HomeScreenContainer";

const HomeScreen = ({ articles, getAllArticles }) => {
  // grab last 3 articles
  useEffect(() => {
    getAllArticles({ lastThree: true });
  }, []);

  //display component
  return (
    <ContainerScroll>
      <HomeScreenContainer articles={articles} />
    </ContainerScroll>
  );
};

//nav options
HomeScreen.navigationOptions = {
  header: null
};

//proptypes
HomeScreen.propTypes = {
  getAllArticles: PropTypes.func
};

//Redux logic
const mapStateToProps = ({ articles }) => {
  return { articles };
};

const mapDispatchToProps = {
  getAllArticles
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeScreen);
