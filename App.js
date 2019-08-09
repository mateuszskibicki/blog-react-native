import { AppLoading } from "expo";
import React, { useState } from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import AppNavigator from "./src/components/navigation/AppNavigator";
import LoadAsyncAssets from "./src/LoadAsyncAssets";

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return (
    <>
      <StatusBar hidden={true} />
      {!isLoadingComplete && !props.skipLoadingScreen ? (
        // app loading component
        <AppLoading
          startAsync={LoadAsyncAssets}
          onError={error => console.warn(error)}
          onFinish={() => setLoadingComplete(true)}
        />
      ) : (
        // proper app
        <View style={styles.container}>
          <StatusBar hidden={true} />
          <AppNavigator />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});
