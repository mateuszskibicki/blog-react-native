import React from "react";
import PropTypes from "prop-types";
import { StyleSheet } from "react-native";
import { ImgFullWidth, ImgContainer } from "../common/images";

const ImageSlice = ({ content } = {}) => {
  if (!content || !content.image) return null;

  const widthFull = content.width === "full-width";
  const widthContainer = content.width === "container";

  if (widthFull)
    return (
      <ImgFullWidth
        styleContainer={styles.imgMarginBottom}
        imageURL={content.image.url}
      />
    );

  if (widthContainer)
    return (
      <ImgContainer
        styleContainer={styles.imgMarginBottom}
        imageURL={content.image.url}
      />
    );

  return null;
};

const styles = StyleSheet.create({
  imgMarginBottom: {
    marginBottom: 32
  }
});

ImageSlice.propTypes = {
  content: PropTypes.shape({
    type: PropTypes.string,
    width: PropTypes.string,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string
    })
  })
};

export default React.memo(ImageSlice);
