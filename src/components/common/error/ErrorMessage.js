import React from "react";
import PropTypes from "prop-types";
import { View, Text, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ErrorMessage = ({ error, style }) => {
  if (!error || typeof error !== "string" || error.length === 0) return null;

  return (
    <View style={[styles.errorContainer, style && style]}>
      <Text style={styles.errorText}>{error}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  errorContainer: {
    width: "100%",
    padding: 8,
    backgroundColor: StylesMain.tomatoColor,
    borderRadius: 5,
    ...StylesMain.shadow
  },
  errorText: {
    marginBottom: 0,
    fontSize: 18,
    color: StylesMain.whiteTextColor,
    fontFamily: StylesMain.fontFamily,
    fontWeight: StylesMain.textBoldWeight,
    textAlign: "center"
  }
});

ErrorMessage.propTypes = {
  error: PropTypes.string,
  style: PropTypes.object
};

export default React.memo(ErrorMessage);
