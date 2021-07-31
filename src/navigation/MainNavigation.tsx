import React from 'react';
import { BottomTabBarOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MainNavigationParamList } from "../types/navigation.types";
import AboutNavigator from "./stack-navigators/AboutNavigator";
import TourCommentaryNavigator from "./stack-navigators/TourCommentaryNavigator";
import colors from '../constants/colors';

const MainTab = createBottomTabNavigator<MainNavigationParamList>();

const defaultTabBarOptions: BottomTabBarOptions = {
  activeTintColor: colors.green,
  inactiveTintColor: 'white',
  style: {
    backgroundColor: colors.purple
  }
}

const MainNavigator = () => (
  <MainTab.Navigator tabBarOptions={defaultTabBarOptions} >
    <MainTab.Screen
      name="TourCommentary"
      component={TourCommentaryNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <FontAwesome name="commenting-o" size={25} color={color} />
        )
      }}
    />
    <MainTab.Screen
      name="About"
      component={AboutNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <Ionicons name="information-circle-outline" size={25} color={color} />
        )
      }}
    />
  </MainTab.Navigator>
)

export default MainNavigator;