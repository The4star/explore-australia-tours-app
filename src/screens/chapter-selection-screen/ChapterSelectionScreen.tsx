import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react'
import { View, ActivityIndicator, Image, FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import ChapterOption from '../../components/chapter-option/ChapterOption';
import colors from '../../constants/colors';
import { client } from '../../pokko/pokko-config';
import { Tour, TourChapter, useTourContentQuery } from '../../pokko/query';
import { ICombinedStates } from '../../state/store';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import styles from './ChapterSelectionScreen.styles';

interface IChapterSelectionScreenProps {
  route: RouteProp<TourCommentaryStackParamList, "ChapterSelection">
  navigation: StackNavigationProp<TourCommentaryStackParamList, "ChapterSelection">
}

const ChapterSelectionScreen = ({ route, navigation }: IChapterSelectionScreenProps) => {
  const tourId = route.params.tourId
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  const { loading, data } = useTourContentQuery({ client, variables: { id: tourId } })
  const selectedTour = data?.entry as Tour

  if (loading) {
    return (
      <View style={styles.loadingScreen}>
        <ActivityIndicator size="large" color={colors.purple} />
      </View>
    )
  }

  return (
    <View style={styles.contentScreen} >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: selectedTour.heroImage.url }} />
      </View>
      <View style={styles.listContainer}>
        <FlatList contentContainerStyle={styles.list} data={selectedTour.chapters as TourChapter[]} renderItem={(itemData: ListRenderItemInfo<TourChapter>) => {
          const getChapterName = () => {
            if (language === 'en') {
              return itemData.item.name
            }
            const translatedTitle = itemData.item.titleTranslations?.find(translation => translation?.language.localisation === language)?.titleTranslation
            return translatedTitle ? translatedTitle : itemData.item.name
          }
          const getChapterContent = () => {
            const translatedContent = itemData.item.content.find(tc => tc?.language.localisation === language)
            const text = translatedContent?.text?.body[0].children[0].text
            const audioUrl = translatedContent?.audioFile?.url
            return {
              text: text ? text : null,
              audioUrl: audioUrl ? audioUrl : null
            }
          }

          return (
            <ChapterOption
              chapterName={getChapterName()}
              chapterContent={getChapterContent()}
              index={itemData.index}
              chapterAmount={selectedTour.chapters.length}
              navigation={navigation}
            />
          )
        }} />
      </View>
    </View >
  )
}

export default ChapterSelectionScreen
