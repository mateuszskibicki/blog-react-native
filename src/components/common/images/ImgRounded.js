import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, ImageBackground } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ImgRounded = ({
  styleContainer,
  imageWrapper,
  imageStyle,
  imageURL,
  left,
  right,
  small,
  big,
  mb0
}) => {
  //check if necessary exists
  if (!imageURL || typeof imageURL !== "string") return null;

  //return component
  return (
    <View
      style={[
        styles.container,
        styleContainer,
        left && { alignItems: "flex-start" },
        right && { alignItems: "flex-end" },
        mb0 && { marginBottom: 0 }
      ]}
    >
      <ImageBackground
        source={{
          uri: imageURL
        }}
        style={[
          styles.imageWrapper,
          small && { height: 150, width: 150 },
          big && { height: 350, width: 350 },
          imageWrapper
        ]}
        imageStyle={[styles.imageStyle, imageStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24
  },
  imageWrapper: {
    width: "100%",
    height: 250,
    width: 250,
    borderRadius: 1000,
    ...StylesMain.shadow
  },
  imageStyle: {
    borderRadius: 1000
  }
});

ImgRounded.propTypes = {
  styleContainer: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageStyle: PropTypes.object,
  imageURL: PropTypes.string,
  small: PropTypes.bool,
  big: PropTypes.bool,
  left: PropTypes.bool,
  right: PropTypes.bool,
  mb0: PropTypes.bool
};

export default React.memo(ImgRounded);
