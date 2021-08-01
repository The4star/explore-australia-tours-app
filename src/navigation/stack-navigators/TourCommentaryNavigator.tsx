import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChapterSelectionScreen from '../../screens/chapter-selection-screen/ChapterSelectionScreen';
import LanguageScreen from '../../screens/language-screen/LanguageScreen';
import TourCommentaryScreen from '../../screens/tour-commentary-screen/TourCommentaryScreen';
import TourSelectionScreen from '../../screens/tour-selection-screen/TourSelectionScreen';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';
import { RouteProp } from '@react-navigation/native';

const TourCommentaryStack = createStackNavigator<TourCommentaryStackParamList>();

const TourCommentaryNavigator = () => (
  <TourCommentaryStack.Navigator screenOptions={defaultScreenOptions}>
    <TourCommentaryStack.Screen
      name="LanguageSelection"
      component={LanguageScreen}
      options={() => {
        return {
          headerShown: false
        }
      }}
    />
    <TourCommentaryStack.Screen
      name="TourSelection"
      component={TourSelectionScreen}
      options={() => {
        return {
          headerTitle: "Tours"
        }
      }}
    />
    <TourCommentaryStack.Screen
      name="ChapterSelection"
      component={ChapterSelectionScreen}
      options={({ route }: { route: RouteProp<TourCommentaryStackParamList, "ChapterSelection"> }) => {
        return {
          headerTitle: route.params.tourName
        }
      }}
    />
    <TourCommentaryStack.Screen
      name="TourCommentary"
      component={TourCommentaryScreen}
      options={() => {
        return {
          headerTitle: "Chapter Name goes here"
        }
      }}
    />
  </TourCommentaryStack.Navigator>
)

export default TourCommentaryNavigator;