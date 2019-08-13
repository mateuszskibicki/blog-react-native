import React from "react";
import PropTypes from "prop-types";
import CategoriesButtons from "../articles/CategoriesButtons";
import ArticlesFlatList from "../articles/ArticlesFlatList";
import ArticlesPagination from "../articles/ArticlesPagination";

const ArticlesScreenContainer = ({
  articles,
  category,
  currentPage,
  totalPages,
  error,
  searchText
} = {}) => {
  if (!articles) return null;

  return (
    <>
      <CategoriesButtons category={category} />
      <ArticlesFlatList articles={articles} totalPages={totalPages} />
      <ArticlesPagination
        category={category}
        searchText={searchText}
        currentPage={currentPage}
        totalPages={totalPages}
      />
    </>
  );
};

ArticlesScreenContainer.propTypes = {
  category: PropTypes.string,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  totalPages: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  error: PropTypes.bool,
  lastThree: PropTypes.arrayOf(PropTypes.object),
  searchText: PropTypes.string,
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

export default React.memo(ArticlesScreenContainer);
