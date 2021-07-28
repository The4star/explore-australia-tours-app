import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../../screens/about-screen/AboutScreen';
import { AboutStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';

const AboutStack = createStackNavigator<AboutStackParamList>();

const AboutNavigator = () => (
  <AboutStack.Navigator screenOptions={defaultScreenOptions}>
    <AboutStack.Screen
      name="About"
      component={AboutScreen}
      options={() => {
        return {
          headerTitle: "About Explore Australia Tours"
        }
      }}
    />
  </AboutStack.Navigator>
)

export default AboutNavigator