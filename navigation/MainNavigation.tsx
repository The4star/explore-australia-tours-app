import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StackNavigationOptions } from "@react-navigation/stack";
import colors from "../constants/colors";
import { MainNavigationParamList } from "../types/navigation.types";
import AboutNavigator from "./stack-navigators/AboutNavigator";
import TourCommentaryNavigator from "./stack-navigators/TourCommentaryNavigator";

const MainTab = createBottomTabNavigator<MainNavigationParamList>();

const MainNavigator = () => (
  <MainTab.Navigator >
    <MainTab.Screen
      name="TourCommentary"
      component={TourCommentaryNavigator}
    />
    <MainTab.Screen
      name="About"
      component={AboutNavigator}
    />
  </MainTab.Navigator>
)

export default MainNavigator;