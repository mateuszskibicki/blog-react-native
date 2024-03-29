import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, ImageBackground } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ImgContainer = ({
  styleContainer,
  imageWrapper,
  imageStyle,
  imageURL,
  small,
  medium,
  big,
  noShadow,
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
        noShadow && {
          shadowColor: null,
          shadowOffset: null,
          shadowOpacity: null,
          shadowRadius: null,
          elevation: null
        },
        mb0 && { marginBottom: 0 }
      ]}
    >
      <ImageBackground
        source={{
          uri: imageURL
        }}
        style={[
          styles.imageWrapper,
          imageWrapper,
          small && {
            height: 160
          },
          medium && {
            height: 220
          },
          big && {
            height: 500
          }
        ]}
        imageStyle={[styles.imageStyle, imageStyle]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    marginBottom: 16,
    ...StylesMain.shadow
  },
  imageWrapper: {
    width: "100%",
    height: 300
  },
  imageStyle: {
    borderRadius: 5
  }
});

ImgContainer.propTypes = {
  styleContainer: PropTypes.object,
  imageWrapper: PropTypes.object,
  imageStyle: PropTypes.object,
  imageURL: PropTypes.string,
  small: PropTypes.bool,
  medium: PropTypes.bool,
  big: PropTypes.bool,
  noShadow: PropTypes.bool,
  mb0: PropTypes.bool
};

export default React.memo(ImgContainer);
