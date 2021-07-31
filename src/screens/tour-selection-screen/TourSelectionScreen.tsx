import React from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native';
import TourOption from '../../components/tour-option/TourOption';
import { client } from '../../pokko/pokko-config'
import { Tour, useToursQuery } from '../../pokko/query';
import styles from './TourSelectionScreen.styles';

const TourSelectionScreen = () => {
  const { loading, data } = useToursQuery({ client })
  const tours = data?.entries?.allTour?.nodes as Tour[]

  return (
    <FlatList data={tours} renderItem={(itemData: ListRenderItemInfo<Tour>) => (
      <TourOption tourName={itemData.item.name} />
    )} />
  )
}

export default TourSelectionScreen
