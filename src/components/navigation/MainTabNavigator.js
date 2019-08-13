import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";

import TabBarIcon from "./TabBarIcon";
import HomeScreen from "../../screens/HomeScreen";
import ArticlesScreen from "../../screens/ArticlesScreen";
import SearchScreen from "../../screens/SearchScreen";
import AboutScreen from "../../screens/AboutScreen";

import StylesMain from "../../constants/StylesMain";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

/**
|--------------------------------------------------
| Home stack
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| Articles stack
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| Search stack
|--------------------------------------------------
*/

const SearchStack = createStackNavigator(
  {
    Search: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={"md-search"} />
  )
};

SearchStack.path = "";

/**
|--------------------------------------------------
| About stack
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| Tab navigator options
|--------------------------------------------------
*/

const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    ArticlesStack,
    SearchStack,
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
        fontFamily: StylesMain.fontFamily,
        fontSize: 13
      },
      activeTintColor: StylesMain.primaryGreen,
      inactiveTintColor: StylesMain.secondaryTextColor
    },
    initialRouteName: "SearchStack"
  }
);

tabNavigator.path = "";

export default tabNavigator;
