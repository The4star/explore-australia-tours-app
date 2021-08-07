import { RouteProp } from '@react-navigation/native';
import React from 'react'
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ICommentaryStyle } from '../../state/general.state';
import { ICombinedStates } from '../../state/store';
import { TourCommentaryStackParamList } from '../../types/navigation.types';

import styles from './TourCommentaryScreen.styles'

interface ITourCommentaryScreenProps {
  route: RouteProp<TourCommentaryStackParamList, "TourCommentary">
}

const TourCommentaryScreen = ({ route }: ITourCommentaryScreenProps) => {
  const commentaryStyle = useSelector<ICombinedStates, ICommentaryStyle>(state => state.general.commentaryStyle)


  return (
    <View>
      <Text>Tour Commentary Screen</Text>
    </View>
  )
}

export default TourCommentaryScreen
