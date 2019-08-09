import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const SmallText = props => {
  if (
    !props.children ||
    !(typeof props.children === "string" || typeof props.children === "number")
  )
    return null;
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
    fontSize: 14,
    fontFamily: StylesMain.fontFamily
  }
});

SmallText.propTypes = {
  style: PropTypes.object,
  secondary: PropTypes.bool,
  bold: PropTypes.bool
};

export default React.memo(SmallText);
