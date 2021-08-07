import React from 'react';
import { Text, TouchableOpacity, View, Image, Platform, TouchableNativeFeedback } from 'react-native';
import styles from './LanguageOption.styles';

interface ILanguageOptionProps {
  language: string;
  imageUri: string;
  onPress: () => void;

}
const LanguageOption = ({ language, imageUri, onPress }: ILanguageOptionProps) => {
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }
  return (
    <View style={styles.wrapper}>
      <TouchableComponent onPress={() => onPress()}>
        <View>
          <Image source={{ uri: imageUri }} style={styles.image} />
          <View style={styles.absolute}>
            <Text style={styles.text}>{language}</Text>
          </View>
        </View>
      </TouchableComponent >
    </View>
  )
}

export default LanguageOption
