import React from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import styles from './LanguageOption.styles';

interface ILanguageOptionProps {
  language: string;
  imageUri: string;
  onPress: () => void;

}
const LanguageOption = ({ language, imageUri, onPress }: ILanguageOptionProps) => {

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={() => onPress()}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.absolute}>
          <Text style={styles.text}>{language}</Text>
        </View>
      </TouchableOpacity >
    </View>
  )
}

export default LanguageOption
