import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './TourOption.styles';
interface ITourOptionProps {
  tourName: string;
  imageUri: string;
  onPress: () => void;
}

const TourOption = ({ tourName, imageUri, onPress }: ITourOptionProps) => {
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
