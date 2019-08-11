import React from "react";
import PropTypes from "prop-types";
import ArticlesHorizontalList from "../articles/ArticlesHorizontalList";

const HomeScreenContainer = ({ articles } = {}) => {
  if (!articles) return null;
  return (
    <ArticlesHorizontalList title={"Last 3 articles:"} articles={articles} />
  );
};

HomeScreenContainer.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      uid: PropTypes.string,
      title: PropTypes.string,
      categories: PropTypes.string,
      tags: PropTypes.string,
      tags: PropTypes.string,
      short_description: PropTypes.string,
      date: PropTypes.string,
      xs_img: PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      }),
      small_img: PropTypes.shape({
        url: PropTypes.string,
        alt: PropTypes.string
      }),
      author: PropTypes.shape({
        uid: PropTypes.string,
        full_name: PropTypes.string,
        short_description: PropTypes.string,
        img_avatar: PropTypes.shape({
          url: PropTypes.string,
          alt: PropTypes.string
        })
      })
    })
  )
};

export default HomeScreenContainer;
