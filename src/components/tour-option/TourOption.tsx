import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from './TourOption.styles';
interface ITourOptionProps {
  tourName: string;
  imageUri: string;
  onPress: () => void;
}

const TourOption = ({ tourName, imageUri, onPress }: ITourOptionProps) => {
  const getLanguage = async () => {
    try {
      const userLanguage = await AsyncStorage.getItem('Language') as string;
      if (userLanguage !== 'en') {
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {tourName}
          </Text>
        </View>
      </View >
    </TouchableOpacity>
  )
}

export default TourOption
