import React from 'react'
import { View, Text } from 'react-native';
import styles from './TourOption.styles';
interface ITourOptionProps {
  tourName: string
}

const TourOption = ({ tourName }: ITourOptionProps) => {
  return (
    <View>
      <Text>
        {tourName}
      </Text>
    </View>
  )
}

export default TourOption
