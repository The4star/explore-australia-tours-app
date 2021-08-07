import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { ActivityIndicator, FlatList, ListRenderItemInfo, View } from 'react-native';
import { useSelector } from 'react-redux';
import TourOption from '../../components/tour-option/TourOption';
import colors from '../../constants/colors';
import { client } from '../../pokko/pokko-config'
import { Tour, useToursListQuery } from '../../pokko/query';
import { ICombinedStates } from '../../state/store';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import styles from './TourSelectionScreen.styles';

interface ITourSelectionScreenProps {
  navigation: StackNavigationProp<TourCommentaryStackParamList, 'TourSelection'>
}

const TourSelectionScreen = ({ navigation }: ITourSelectionScreenProps) => {
  const { loading, data } = useToursListQuery({ client });
  const tours = data?.entries?.allTour?.nodes as Tour[];
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)

  if (loading) {
    return (
      <View style={styles.screen}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    )
  }

  return (
    <FlatList contentContainerStyle={styles.list} data={tours} renderItem={(itemData: ListRenderItemInfo<Tour>) => {
      const getTitle = (): string => {
        if (language === 'en') {
          return itemData.item.name
        } else {
          const translatedTitle = itemData.item.titleTranslations.find(translation => translation?.language.localisation === language)?.titleTranslation!
          return translatedTitle ? translatedTitle : itemData.item.name
        }
      }
      const titleToUse = getTitle()
      return (
        <TourOption
          tourName={titleToUse}
          imageUri={itemData.item.heroImage.url}
          onPress={() => navigation.navigate({
            name: 'ChapterSelection',
            params: { tourId: itemData.item.id, tourName: titleToUse }
          })}
        />
      )
    }} />
  )
}

export default TourSelectionScreen
