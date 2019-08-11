import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const MediumText = props => {
  //check if necessary exists
  if (
    !props.children ||
    !(typeof props.children === "string" || typeof props.children === "number")
  )
    return null;

  //return component
  return (
    <Text
      {...props}
      style={[
        styles.text,
        props.style,
        props.secondary && { color: StylesMain.secondaryTextColor },
        props.bold && { fontWeight: StylesMain.textBoldWeight },
        props.center && { textAlign: "center" },
        props.right && { textAlign: "right" }
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool
};

export default React.memo(MediumText);
