import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const MediumBoldText = props => {
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
        props.secondary && { color: StylesMain.secondaryTextColor }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24,
    color: StylesMain.textColor,
    fontSize: 32,
    fontWeight: StylesMain.textBoldWeight,
    fontFamily: StylesMain.fontFamily
  }
});

MediumBoldText.propTypes = {
  style: PropTypes.object,
  secondary: PropTypes.bool
};

export default MediumBoldText;
