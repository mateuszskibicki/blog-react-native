import React from "react";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const BigText = props => {
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
    fontSize: 44,
    fontFamily: StylesMain.fontFamily
  }
});

export default BigText;
