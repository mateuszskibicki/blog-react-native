import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { SmallText, NormalText } from "../common/text";
import CategoriesList from "../common/categoriesList/CategoriesList";
import TagsList from "../common/tagsList/TagsList";
import { ImgRounded } from "../common/images";
import StylesMain from "../../constants/StylesMain";

const ArticleFooter = ({ categories, tags, author }) => {
  return (
    <View style={styles.container}>
      {categories && <CategoriesList categories={categories} />}
      {tags && <TagsList tags={tags} />}
      {author && author.uid && (
        <View style={styles.authorContainer}>
          <View style={{ width: "35%" }}>
            {author.image_avatar && (
              <ImgRounded xsmall imageURL={author.image_avatar.url} />
            )}
          </View>
          <View style={{ width: "65%" }}>
            {author.full_name && (
              <NormalText bold>{author.full_name}</NormalText>
            )}
            {author.short_description && (
              <SmallText secondary>{author.short_description}</SmallText>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    paddingTop: 16,
    marginBottom: 32,
    paddingBottom: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,.1)",
    backgroundColor: StylesMain.backgroundColor
  },
  authorContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "nowrap"
  }
});

ArticleFooter.propTypes = {
  categories: PropTypes.string,
  tags: PropTypes.string,
  author: PropTypes.shape({
    uid: PropTypes.string,
    full_name: PropTypes.string,
    short_description: PropTypes.string,
    image_avatar: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    })
  })
};

export default React.memo(ArticleFooter);
