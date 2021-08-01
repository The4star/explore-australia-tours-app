import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from 'react-native';
import TourOption from '../../components/tour-option/TourOption';
import colors from '../../constants/colors';
import { client } from '../../pokko/pokko-config'
import { Tour, useToursListQuery } from '../../pokko/query';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import styles from './TourSelectionScreen.styles';

interface ITourSelectionScreenProps {
  navigation: StackNavigationProp<TourCommentaryStackParamList, 'TourSelection'>
}

const TourSelectionScreen = ({ navigation }: ITourSelectionScreenProps) => {
  const { loading, data } = useToursListQuery({ client })
  const tours = data?.entries?.allTour?.nodes as Tour[]

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    )
  }

  return (
    <FlatList contentContainerStyle={styles.list} data={tours} renderItem={(itemData: ListRenderItemInfo<Tour>) => (
      <TourOption
        tourName={itemData.item.name}
        imageUri={itemData.item.heroImage.url}
        onPress={() => navigation.navigate({
          name: 'ChapterSelection',
          params: { tourId: itemData.item.id, tourName: itemData.item.name }
        })}
      />
    )} />
  )
}

export default TourSelectionScreen
