import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  ScrollView,
  StatusBar,
  ActivityIndicator
} from "react-native";
import Prismic from "prismic-javascript";
import { PRISMIC_URL, PRISMIC_SECRET } from "react-native-dotenv";

export default function SettingsScreen() {
  const [loading, setLoading] = useState(true);
  const [wallpapers, setWallpapers] = useState(null);

  const asyncPrismic = async () => {
    const PrismicConnection = await Prismic.getApi(PRISMIC_URL, {
      accessToken: PRISMIC_SECRET
    });

    const wallpaperArray = await PrismicConnection.query(
      Prismic.Predicates.at("document.type", "wallpaper"),
      { pageSize: 10, page: 1 }
    );

    setLoading(false);
    setWallpapers(wallpaperArray.results);
  };

  useEffect(() => {
    asyncPrismic();
  }, []);

  if (loading)
    return (
      <View style={styles.containerLoading}>
        <StatusBar hidden={true} />
        <ActivityIndicator size="large" style={styles.indicatorColor} />
      </View>
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <StatusBar hidden={true} />
      {wallpapers &&
        wallpapers.map(wallpaper => {
          return (
            <View style={styles.imageContainer} key={wallpaper.data.img_sm.url}>
              <Image
                style={styles.image}
                // resizeMode="contain"
                source={{ uri: wallpaper.data.img_sm.url }}
              />
            </View>
          );
        })}
    </ScrollView>
  );
}

SettingsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5f5"
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: "#f5f5f5",
    paddingTop: 36,
    paddingBottom: 36
  },
  indicatorColor: {
    color: "#ff6347"
  },
  imageContainer: {
    marginBottom: 36,
    borderRadius: 2
  },
  image: {
    width: 320,
    height: 180,
    borderRadius: 2
  }
});
