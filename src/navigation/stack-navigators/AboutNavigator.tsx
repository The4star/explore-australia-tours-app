import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../../screens/about-screen/AboutScreen';
import { AboutStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';
import { useSelector } from 'react-redux';
import { ICombinedStates } from '../../state/store';
import { translate } from '../../helpers/general';

const AboutStack = createStackNavigator<AboutStackParamList>();

const AboutNavigator = () => {
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  return (
    <AboutStack.Navigator screenOptions={defaultScreenOptions}>
      <AboutStack.Screen
        name="About"
        component={AboutScreen}
        options={() => {
          return {
            headerTitle: translate("aboutEA", language!)
          }
        }}
      />
    </AboutStack.Navigator>
  )
}

export default AboutNavigator