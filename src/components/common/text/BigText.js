import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const BigText = props => {
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
    fontSize: 44,
    fontFamily: StylesMain.fontFamily
  }
});

BigText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool
};

export default React.memo(BigText);
