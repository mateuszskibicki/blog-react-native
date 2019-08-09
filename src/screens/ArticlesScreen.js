import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>articles screen</Text>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: "Links"
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});
