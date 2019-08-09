import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import StylesMain from "../../../constants/StylesMain";

const ContainerScroll = props => {
  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.contentContainer}
      >
        {props.children}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: StylesMain.backgroundColor
  },
  contentContainer: {
    paddingTop: 48,
    paddingBottom: 24,
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: StylesMain.backgroundColor
  }
});

export default ContainerScroll;
