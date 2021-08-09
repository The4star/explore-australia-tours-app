import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChapterSelectionScreen from '../../screens/chapter-selection-screen/ChapterSelectionScreen';
import TourCommentaryScreen from '../../screens/tour-commentary-screen/TourCommentaryScreen';
import TourSelectionScreen from '../../screens/tour-selection-screen/TourSelectionScreen';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { defaultScreenOptions } from './stack-navigator-options';
import { RouteProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { Text, TouchableOpacity, View } from 'react-native';
import { ICommentaryStyle, setCommentaryStyle, setLanguage } from '../../state/general.state';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import chapterOptionStyles from '../../components/chapter-option/ChapterOption.styles'
import { ICombinedStates } from '../../state/store';
import { translate } from '../../helpers/general';

const TourCommentaryStack = createStackNavigator<TourCommentaryStackParamList>();

const TourCommentaryNavigator = () => {
  const dispatch = useDispatch()
  const commentaryStyle = useSelector<ICombinedStates, ICommentaryStyle>(state => state.general.commentaryStyle)
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  return (
    <TourCommentaryStack.Navigator screenOptions={defaultScreenOptions}>
      <TourCommentaryStack.Screen
        name="TourSelection"
        component={TourSelectionScreen}
        options={() => {
          return {
            headerTitle: translate("tours", language!),
            headerRight: ({ tintColor }) => (
              <TouchableOpacity
                onPress={() => dispatch(setLanguage(null))}
              >
                <Text
                  style={{
                    color: tintColor,
                    fontFamily: 'open-sans',
                    fontSize: 14,
                    marginRight: 10
                  }}
                >
                  {translate("changeLanguage", language!)}
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
        options={({ route }: { route: RouteProp<TourCommentaryStackParamList, "TourCommentary"> }) => {
          return {
            headerTitle: route.params.chapterName,
            headerRight: ({ tintColor }) => (
              <View style={{ marginRight: 20, marginBottom: 5 }}>
                <TouchableOpacity onPress={() => dispatch(setCommentaryStyle(commentaryStyle === 'read' ? 'listen' : 'read'))} >
                  <View style={chapterOptionStyles.button}>
                    <View style={chapterOptionStyles.buttonImage}>
                      {
                        commentaryStyle === 'read' ?
                          <AntDesign name="sound" size={24} color={tintColor} />
                          :
                          <Entypo name="open-book" size={24} color={tintColor} />
                      }
                    </View>
                    <Text style={{ ...chapterOptionStyles.text, ...{ color: tintColor } }}>{commentaryStyle === 'read' ? translate('listen', language!) : translate('read', language!)}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            )
          }
        }}
      />
    </TourCommentaryStack.Navigator>
  )
}

export default TourCommentaryNavigator;