import React from 'react';
import { BottomTabBarOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MainNavigationParamList } from "../types/navigation.types";
import AboutNavigator from "./stack-navigators/AboutNavigator";
import TourCommentaryNavigator from "./stack-navigators/TourCommentaryNavigator";
import colors from '../constants/colors';
import { translate } from '../helpers/general';
import { useSelector } from 'react-redux';
import { ICombinedStates } from '../state/store';

const MainTab = createBottomTabNavigator<MainNavigationParamList>();

const defaultTabBarOptions: BottomTabBarOptions = {
  activeTintColor: colors.green,
  inactiveTintColor: 'white',
  style: {
    backgroundColor: colors.purple
  }
}

const MainNavigator = () => {
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  return (
    <MainTab.Navigator tabBarOptions={defaultTabBarOptions} >
      <MainTab.Screen
        name="TourCommentary"
        component={TourCommentaryNavigator}
        options={{
          tabBarLabel: translate("tourCommentary", language!),
          tabBarIcon: ({ color }) => (
            <FontAwesome name="commenting-o" size={25} color={color} />
          )
        }}
      />
      <MainTab.Screen
        name="About"
        component={AboutNavigator}
        options={{
          tabBarLabel: translate("about", language!),
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={25} color={color} />
          )
        }}
      />
    </MainTab.Navigator>
  )
}

export default MainNavigator;