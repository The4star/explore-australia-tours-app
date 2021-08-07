import React from 'react'
import { View, Text, TouchableOpacity, Platform, TouchableNativeFeedback, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { ICommentaryStyle, setCommentaryStyle } from '../../state/general.state';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import styles from './ChapterOption.styles';
import colors from '../../constants/colors';
import { StackNavigationProp } from '@react-navigation/stack';
import { TourCommentaryStackParamList } from '../../types/navigation.types';
import { IChapterReadyContent } from '../../types/tour-commentary.types';

interface IChapterOptionProps {
  chapterName: string;
  chapterContent: IChapterReadyContent
  index: number;
  chapterAmount: number;
  navigation: StackNavigationProp<TourCommentaryStackParamList, "ChapterSelection">;
}

const ChapterOption = ({ chapterName, chapterContent, index, chapterAmount, navigation }: IChapterOptionProps) => {
  const dispatch = useDispatch();
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  const openChapter = (commentaryStyle: ICommentaryStyle) => {
    dispatch(setCommentaryStyle(commentaryStyle));
    navigation.navigate({
      name: "TourCommentary",
      params: {
        chapterName
      }
    })
  }

  const noContentAlert = (text: string) => {
    Alert.alert(
      'Content Not Available',
      `No ${text} content available for selected chapter in your chosen language`,
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
        <TouchableComponent onPress={() => chapterContent.text ? openChapter('read') : noContentAlert('text')}  >
          <View style={styles.button}>
            <View style={styles.buttonImage}>
              <Entypo name="open-book" size={24} color={chapterContent.text ? colors.green : colors.grey} />
            </View>
            <Text style={{ ...styles.text, ...{ color: chapterContent.text ? colors.green : colors.grey } }}>Read</Text>
          </View>
        </TouchableComponent>
        <TouchableComponent onPress={() => chapterContent.audioUrl ? openChapter('listen') : noContentAlert('audio')} >
          <View style={styles.button}>
            <View style={styles.buttonImage}>
              <AntDesign name="sound" size={24} color={chapterContent.audioUrl ? colors.green : colors.grey} />
            </View>
            <Text style={{ ...styles.text, ...{ color: chapterContent.audioUrl ? colors.green : colors.grey } }}>Listen</Text>
          </View>
        </TouchableComponent>
      </View>
    </View >
  )
}

export default ChapterOption
