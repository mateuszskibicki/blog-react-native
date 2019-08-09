import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "./TabBarIcon";
import HomeScreen from "../../screens/HomeScreen";
import ArticlesScreen from "../../screens/ArticlesScreen";
import AboutScreen from "../../screens/AboutScreen";

import StylesMain from "../../constants/StylesMain";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={"md-home"} />
};

HomeStack.path = "";

const ArticlesStack = createStackNavigator(
  {
    Articles: ArticlesScreen
  },
  config
);

ArticlesStack.navigationOptions = {
  tabBarLabel: "Articles",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-albums"} />
  )
};

ArticlesStack.path = "";

const AboutStack = createStackNavigator(
  {
    About: AboutScreen
  },
  config
);

AboutStack.navigationOptions = {
  tabBarLabel: "About",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-contact"} />
  )
};

AboutStack.path = "";

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ArticlesStack,
    AboutStack
  },
  {
    tabBarOptions: {
      style: {
        ...StylesMain.bigShadow,
        borderTopColor: "#eee",
        borderTopWidth: 2
      },
      labelStyle: {
        fontWeight: StylesMain.fontWeight
      },
      activeTintColor: StylesMain.primaryGreen
    }
  }
);

tabNavigator.path = "";

export default tabNavigator;
