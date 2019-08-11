import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const CodeScrollSide = ({ code, styleContainer, styleCode }) => {
  //check if necessary exists
  if (!code || typeof code !== "string") return null;

  //return component
  return (
    <ScrollView style={[styles.scrollContainer]} horizontal={true}>
      <View style={[styles.container, styleContainer]}>
        <Text style={[styles.code, styleCode]}>{code}</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    marginLeft: -16,
    marginRight: -16,
    marginBottom: 24,
    ...StylesMain.bigShadow
  },
  container: {
    padding: 16,
    backgroundColor: "#2d2d2d"
  },
  code: {
    fontSize: 20,
    color: StylesMain.whiteTextColor,
    fontFamily: StylesMain.fontFamily,
    letterSpacing: 0.5
  }
});

CodeScrollSide.propTypes = {
  styleContainer: PropTypes.object,
  styleCode: PropTypes.object,
  code: PropTypes.string
};

export default React.memo(CodeScrollSide);
