import React from "react";
import { ActivityIndicator, View, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const Spinner = () => (
  <View style={styles.containerSpinner}>
    <ActivityIndicator size={100} color={StylesMain.primaryGreen} />
  </View>
);

const styles = StyleSheet.create({
  containerSpinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: StylesMain.backgroundColor
  }
});

export default React.memo(Spinner);
