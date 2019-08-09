import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const MediumText = props => {
  if (!props.children || typeof props.children !== "string") return null;
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
        props.secondary && { color: StylesMain.secondaryTextColor },
        props.bold && { fontWeight: StylesMain.textBoldWeight }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24,
    color: StylesMain.textColor,
    fontSize: 32,
    fontFamily: StylesMain.fontFamily
  }
});

MediumText.propTypes = {
  style: PropTypes.object,
  secondary: PropTypes.bool,
  bold: PropTypes.bool
};

export default MediumText;
