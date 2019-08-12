import React from "react";
import PropTypes from "prop-types";
import { FlatList, StyleSheet } from "react-native";

import ArticlesListSingleVertical from "./ArticlesListSingleVertical";

const ArticlesFlatList = ({ articles, title }) => {
  if (!articles || !Array.isArray(articles) || articles.length === 0)
    return null;

  return (
    <FlatList
      style={styles.container}
      data={articles}
      renderItem={article => {
        return <ArticlesListSingleVertical article={article.item} />;
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginHorizontal: -16
  }
});

ArticlesFlatList.propTypes = {
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

export default React.memo(ArticlesFlatList);
