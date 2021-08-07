import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LanguageStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';
import LanguageScreen from '../../screens/language-screen/LanguageScreen';

const LanguageStack = createStackNavigator<LanguageStackParamList>();

const LanguageNavigator = () => (
  <LanguageStack.Navigator screenOptions={defaultScreenOptions}>
    <LanguageStack.Screen
      name="LanguageSelection"
      component={LanguageScreen}
      options={() => {
        return {
          headerShown: false
        }
      }}
    />
  </LanguageStack.Navigator>
)

export default LanguageNavigator