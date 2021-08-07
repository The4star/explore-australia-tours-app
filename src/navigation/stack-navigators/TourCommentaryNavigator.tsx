import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChapterSelectionScreen from '../../screens/chapter-selection-screen/ChapterSelectionScreen';
import TourCommentaryScreen from '../../screens/tour-commentary-screen/TourCommentaryScreen';
import TourSelectionScreen from '../../screens/tour-selection-screen/TourSelectionScreen';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';
import { RouteProp } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { Text, TouchableOpacity } from 'react-native';
import { setLanguage } from '../../state/general.state';
import colors from '../../constants/colors';

const TourCommentaryStack = createStackNavigator<TourCommentaryStackParamList>();

const TourCommentaryNavigator = () => {
  const dispatch = useDispatch()

  return (
    <TourCommentaryStack.Navigator screenOptions={defaultScreenOptions}>
      <TourCommentaryStack.Screen
        name="TourSelection"
        component={TourSelectionScreen}
        options={() => {
          return {
            headerTitle: "Tours",
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => dispatch(setLanguage(null))}
              >
                <Text
                  style={{
                    color: colors.green,
                    fontFamily: 'open-sans',
                    fontSize: 18,
                    marginRight: 10
                  }}
                >
                  Change Language
                </Text>
              </TouchableOpacity>
            )
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
}

export default TourCommentaryNavigator;