import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Platform, TouchableNativeFeedback, Touchable, ActivityIndicator } from 'react-native';
import colors from '../../constants/colors';
import { truncate } from '../../helpers/general';

import styles from './TourOption.styles';
interface ITourOptionProps {
  tourName: string;
  imageUri: string;
  onPress: () => void;
}

const TourOption = ({ tourName, imageUri, onPress }: ITourOptionProps) => {
  let TouchableComponent: any = TouchableOpacity;
  const [loadingImage, setLoadingImage] = useState<boolean>(false)

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <TouchableComponent onPress={() => onPress()}>
      <View style={styles.card}>
        <View style={styles.imageContainer}>
          {
            loadingImage ?
              <ActivityIndicator size="small" color={colors.purple} />
              : null
          }
          <Image
            style={{ ...styles.image, ...loadingImage ? { height: 0 } : { height: '100%' } }}
            source={{ uri: imageUri }}
            onLoadStart={() => setLoadingImage(true)}
            onLoadEnd={() => setLoadingImage(false)}
          />

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
