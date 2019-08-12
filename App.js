import { AppLoading } from "expo";
import React, { useState } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { StyleSheet, View, StatusBar } from "react-native";
import AppNavigator from "./src/components/navigation/AppNavigator";
import LoadAsyncAssets from "./src/LoadAsyncAssets";

import configureStore from "./src/store/store";

const reduxStore = configureStore();

const App = props => {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  return (
    <ReduxProvider store={reduxStore}>
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
          <AppNavigator />
        </View>
      )}
    </ReduxProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5"
  }
});

export default App;
