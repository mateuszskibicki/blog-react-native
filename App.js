import { AppLoading } from "expo";
import * as Font from "expo-font";
import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import AppNavigator from "./components/navigation/AppNavigator";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <AppNavigator />
      </View>
    );
  }
}

async function loadResourcesAsync() {
  await Promise.all([
    // Asset.loadAsync([
    //   require("./assets/images/robot-dev.png"),
    //   require("./assets/images/robot-prod.png")
    // ]),
    Font.loadAsync({
      ...Ionicons.font,
      //"space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "titillium-web": require("./assets/fonts/TitilliumWeb-Regular.ttf")
    })
  ]);
}

function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
