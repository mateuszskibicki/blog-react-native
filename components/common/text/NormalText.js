import React from "react";
import { Text, StyleSheet } from "react-native";

const NormalText = props => {
  return <Text {...props} style={[styles.text, props.style]} />;
};

const styles = StyleSheet.create({
  text: {
    marginBottom: 24,
    fontSize: 20,
    fontFamily: "titillium-web"
  }
});

export default NormalText;
