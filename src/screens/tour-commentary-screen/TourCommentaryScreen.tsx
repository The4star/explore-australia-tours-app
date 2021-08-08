import { RouteProp } from '@react-navigation/native';
import React, { useState } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { useSelector } from 'react-redux';
import AudioPlayer from '../../components/audio-player/AudioPlayer';
import colors from '../../constants/colors';
import { ICommentaryStyle } from '../../state/general.state';
import { ICombinedStates } from '../../state/store';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { IChapterReadyContent } from '../../types/tour-commentary.types';

import styles from './TourCommentaryScreen.styles'

interface ITourCommentaryScreenProps {
  route: RouteProp<TourCommentaryStackParamList, "TourCommentary">
}

const TourCommentaryScreen = ({ route }: ITourCommentaryScreenProps) => {
  const commentaryStyle = useSelector<ICombinedStates, ICommentaryStyle>(state => state.general.commentaryStyle)
  const commentaryContent = useSelector<ICombinedStates, IChapterReadyContent>(state => state.general.commentaryContent)
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  return (
    <View style={styles.contentScreen} >
      <View style={styles.imageContainer}>
        {
          loadingImage ?
            <ActivityIndicator size="small" color={colors.purple} />
            : null
        }
        < Image
          style={{ ...styles.image, ...loadingImage ? { height: 0 } : { height: '100%' } }}
          source={{ uri: commentaryContent.heroImage! }}
          onLoadStart={() => setLoadingImage(true)}
          onLoadEnd={() => setLoadingImage(false)}
        />
      </View>
      {
        commentaryStyle === 'read' ?
          <ScrollView style={styles.textContainer}>
            <Text style={styles.text}>
              {commentaryContent.text}
            </Text>
          </ScrollView>
          : null
      }
      {
        commentaryStyle === 'listen' ?
          <AudioPlayer audioSource={commentaryContent.audioUrl as string} />
          :
          null
      }
    </View>
  )
}

export default TourCommentaryScreen
