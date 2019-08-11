import React from "react";
import PropTypes from "prop-types";
import { View, ScrollView, StyleSheet } from "react-native";
import { MediumText } from "../common/text";
import ArticlesListSingle from "./ArticlesListSingle";

import StylesMain from "../../constants/StylesMain";

const ArticlesHorizontalList = ({ articles, title }) => {
  if (!articles || !Array.isArray(articles) || articles.length === 0)
    return null;

  return (
    <View style={styles.container}>
      {title && (
        <MediumText center bold>
          {title}
        </MediumText>
      )}
      <ScrollView horizontal={true}>
        {articles.map(article => (
          <ArticlesListSingle article={article} key={article.uid} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: -16
  }
});

ArticlesHorizontalList.propTypes = {
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

export default ArticlesHorizontalList;
