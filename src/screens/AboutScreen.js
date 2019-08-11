import React from "react";
import { ScrollView, Text, StyleSheet } from "react-native";

const AboutScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text>about screen</Text>
    </ScrollView>
  );
};

AboutScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: "#fff"
  }
});

export default AboutScreen;
