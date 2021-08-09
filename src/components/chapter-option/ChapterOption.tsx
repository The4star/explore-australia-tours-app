import React from 'react'
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ICommentaryStyle, setCommentaryContent, setCommentaryStyle } from '../../state/general.state';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './ChapterOption.styles';
import colors from '../../constants/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { IChapterReadyContent } from '../../types/tour-commentary.types';
import { translate } from '../../helpers/general';
import { ICombinedStates } from '../../state/store';

interface IChapterOptionProps {
  chapterName: string;
  chapterContent: IChapterReadyContent
  index: number;
  chapterAmount: number;
  navigation: StackNavigationProp<TourCommentaryStackParamList, "ChapterSelection">;
}

const ChapterOption = ({ chapterName, chapterContent, index, chapterAmount, navigation }: IChapterOptionProps) => {
  const dispatch = useDispatch();
  const language = useSelector<ICombinedStates, string | null>(state => state.general.language)
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  const openChapter = (commentaryStyle: ICommentaryStyle) => {
    dispatch(setCommentaryContent(chapterContent))
    dispatch(setCommentaryStyle(commentaryStyle));
    navigation.navigate({
      name: "TourCommentary",
      params: {
        chapterName
      }
    })
  }

  const noContentAlert = () => {
    Alert.alert(
      translate('contentNotAvailable', language!),
      translate('contentNotAvailableText', language!),
      [
        { text: 'OK' }
      ]
    )
  }

  return (
    <View style={{ ...styles.option, ...index !== chapterAmount - 1 ? styles.borderBottom : {} }}>
      <Text style={styles.name}>
        {chapterName}
      </Text>
      <View style={styles.ctaSection}>
        <TouchableComponent onPress={() => chapterContent.text ? openChapter('read') : noContentAlert()}  >
          <View style={styles.button}>
            <View style={styles.buttonImage}>
              <Entypo name="open-book" size={24} color={chapterContent.text ? colors.green : colors.grey} />
            </View>
            <Text style={{ ...styles.text, ...{ color: chapterContent.text ? colors.green : colors.grey } }}>{translate('read', language!)}</Text>
          </View>
        </TouchableComponent>
        <TouchableComponent onPress={() => chapterContent.audioUrl ? openChapter('listen') : noContentAlert()} >
          <View style={styles.button}>
            <View style={styles.buttonImage}>
              <AntDesign name="sound" size={24} color={chapterContent.audioUrl ? colors.green : colors.grey} />
            </View>
            <Text style={{ ...styles.text, ...{ color: chapterContent.audioUrl ? colors.green : colors.grey } }}>{translate('listen', language!)}</Text>
          </View>
        </TouchableComponent>
      </View>
    </View >
  )
}

export default ChapterOption
