import React from "react";
import PropTypes from "prop-types";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const SmallText = props => {
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
        props.right && { textAlign: "right" },
        props.mb0 && { marginBottom: 0 }
      ]}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 16,
    color: StylesMain.textColor,
    fontSize: 16,
    fontFamily: StylesMain.fontFamily
  }
});

SmallText.propTypes = {
  style: PropTypes.object,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  secondary: PropTypes.bool,
  bold: PropTypes.bool,
  center: PropTypes.bool,
  right: PropTypes.bool,
  mb0: PropTypes.bool
};

export default React.memo(SmallText);
