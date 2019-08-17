import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";
import { MediumText, SmallText } from "../common/text";
import { ImgFullWidth } from "../common/images";
import StylesMain from "../../constants/StylesMain";

const ArticleHeader = ({ title, short_description, date, big_img, author }) => {
  return (
    <View style={styles.container}>
      {title && (
        <MediumText style={styles.textMargins} bold>
          {title}
        </MediumText>
      )}
      {date && author && author.full_name && (
        <SmallText style={styles.textMargins} bold secondary right>
          {author.full_name} | {date}
        </SmallText>
      )}
      {short_description && (
        <SmallText secondary style={styles.marginBetweenImage}>
          {short_description}
        </SmallText>
      )}
      {big_img && big_img.url && <ImgFullWidth imageURL={big_img.url} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 32,
    backgroundColor: StylesMain.backgroundColor,
    marginBottom: 32
  },
  textMargins: {
    marginBottom: 8
  },
  marginBetweenImage: {
    marginBottom: 32
  }
});

ArticleHeader.propTypes = {
  title: PropTypes.string,
  short_description: PropTypes.string,
  date: PropTypes.string,
  big_img: PropTypes.shape({
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
};

export default React.memo(ArticleHeader);
