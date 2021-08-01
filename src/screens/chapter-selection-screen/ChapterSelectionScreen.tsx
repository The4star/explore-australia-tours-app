import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, Text, ActivityIndicator, Image } from 'react-native';
import colors from '../../constants/colors';
import { client } from '../../pokko/pokko-config';
import { Tour, useTourContentQuery } from '../../pokko/query';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import styles from './ChapterSelectionScreen.styles';

interface IChapterSelectionScreenProps {
  route: RouteProp<TourCommentaryStackParamList, "ChapterSelection">
  navigation: StackNavigationProp<TourCommentaryStackParamList, "ChapterSelection">
}
const ChapterSelectionScreen = ({ route, navigation }: IChapterSelectionScreenProps) => {
  const tourId = route.params.tourId
  const { loading, data } = useTourContentQuery({ client, variables: { id: tourId } })
  const selectedTour = data?.entry as Tour

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    )
  }

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedTour.heroImage.url }} />
      </View>
    </View >
  )
}

export default ChapterSelectionScreen
