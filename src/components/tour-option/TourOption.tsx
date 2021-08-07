import React from 'react'
import { View, Text, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Touchable } from 'react-native';
import { truncate } from '../../helpers/general';

import styles from './TourOption.styles';
interface ITourOptionProps {
  tourName: string;
  imageUri: string;
  onPress: () => void;
}

const TourOption = ({ tourName, imageUri, onPress }: ITourOptionProps) => {
  let TouchableComponent: any = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <TouchableComponent onPress={() => onPress()}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: imageUri }} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>
            {truncate(tourName, 40)}
          </Text>
        </View>
      </View >
    </TouchableComponent>
  )
}

export default TourOption
