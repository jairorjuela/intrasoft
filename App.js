import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from './Home'



const AppNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(AppNavigator);
