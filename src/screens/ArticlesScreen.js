import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const ArticlesScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>articles screen</Text>
    </ScrollView>
  );
};

ArticlesScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default ArticlesScreen;
