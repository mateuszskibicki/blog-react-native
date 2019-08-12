import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Ionicons } from "@expo/vector-icons";

export default async function loadResourcesAsync() {
  await Promise.all([
    Asset.loadAsync([require("../assets/images/profile_photo.jpg")]),
    Font.loadAsync({
      ...Ionicons.font,
      //"space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "titillium-web": require("../assets/fonts/TitilliumWeb-Regular.ttf")
    })
  ]);
}
