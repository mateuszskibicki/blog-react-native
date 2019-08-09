import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

export default async function loadResourcesAsync() {
  await Promise.all([
    // Asset.loadAsync([
    //   require("./assets/images/robot-dev.png"),
    //   require("./assets/images/robot-prod.png")
    // ]),
    Font.loadAsync({
      ...Ionicons.font,
      //"space-mono": require("./assets/fonts/SpaceMono-Regular.ttf"),
      "titillium-web": require("../assets/fonts/TitilliumWeb-Regular.ttf")
    })
  ]);
}
