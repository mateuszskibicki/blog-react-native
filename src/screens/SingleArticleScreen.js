import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const SingleArticleScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>about screen</Text>
    </ScrollView>
  );
};

SingleArticleScreen.navigationOptions = ({ navigation }) => {
  return { title: navigation.getParam("title") };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default SingleArticleScreen;
