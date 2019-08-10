import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, ImageBackground } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ImgFullWidth = ({
  styleContainer,
  imageWrapper,
  imageStyle,
  imageURL,
  small,
  big
}) => {
  //check if necessary exists
  if (!imageURL || typeof imageURL !== "string") return null;

  //return component
  return (
    <View style={[styles.container, styleContainer]}>
      <ImageBackground
        source={{
          uri: imageURL
        }}
        style={[
          styles.imageWrapper,
          imageWrapper,
          small && {
            height: 200
          },
          big && {
            height: 500
          }
        ]}
        imageStyle={[imageStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 0,
    marginBottom: 24,
    marginLeft: -16,
    marginRight: -16,
    ...StylesMain.shadow
  },
  imageWrapper: {
    width: "100%",
    height: 300
  }
});

ImgFullWidth.propTypes = {
  styleContainer: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageStyle: PropTypes.object,
  imageURL: PropTypes.string,
  small: PropTypes.bool,
  big: PropTypes.bool
};

export default React.memo(ImgFullWidth);
