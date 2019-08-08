import React from "react";
import { Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const BigBoldText = props => {
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
    color: StylesMain.color,
    fontSize: 44,
    fontWeight: "600",
    fontFamily: StylesMain.fontFamily
  }
});

export default BigBoldText;
