import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { ImgContainer } from "../common/images";
import { NormalText, SmallText } from "../common/text";
// import TagsList from "../common/tagsList/TagsList";
import CategoriesList from "../common/categoriesList/CategoriesList";
import { ButtonPrimary } from "../common/buttons";

//constants
import StylesMain from "../../constants/StylesMain";
import Layout from "../../constants/Layout";

const ArticlesListSingleHorizontal = ({
  article: {
    uid,
    title,
    categories,
    //tags,
    short_description,
    date,
    small_img,
    author
  }
}) => {
  if (!uid || typeof uid !== "string") return null;

  return (
    <View style={styles.container}>
      {/* Small img on top */}
      <ImgContainer
        small
        noShadow
        imageURL={small_img.url}
        styleContainer={{ marginBottom: 8 }}
        imageStyle={{ borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }}
      />
      {/* Content wrapper */}
      <View style={styles.contentWrapper}>
        {/* Author and date on top */}
        <View style={styles.authorDateWrapper}>
          <SmallText bold secondary right mb0>
            {author.full_name}
          </SmallText>
          <SmallText bold secondary right mb0>
            {date}
          </SmallText>
        </View>
        {/* Title, description, categories, tags, button to go */}
        <NormalText bold style={{ marginBottom: 8 }}>
          {title}
        </NormalText>
        <SmallText style={{ marginBottom: 8 }}>{short_description}</SmallText>
        {/* <TagsList tags={tags} /> */}
        <CategoriesList categories={categories} />
        <ButtonPrimary right>Read more...</ButtonPrimary>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Layout.window.width * 0.8,
    alignSelf: "flex-start",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: StylesMain.whiteSmoke,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 8,
    backgroundColor: StylesMain.backgroundColor,
    ...StylesMain.shadow
  },
  contentWrapper: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: StylesMain.backgroundColor
  },
  authorDateWrapper: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 4
  }
});

ArticlesListSingleHorizontal.propTypes = {
  article: PropTypes.shape({
    uid: PropTypes.string,
    title: PropTypes.string,
    categories: PropTypes.string,
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
};

export default React.memo(ArticlesListSingleHorizontal);
