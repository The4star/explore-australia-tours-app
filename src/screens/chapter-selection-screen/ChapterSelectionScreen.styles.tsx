import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  contentScreen: {
    flex: 1
  },
  imageContainer: {
    width: '100%',
    height: 200,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1
  },
  image: {
    width: '100%',
    height: '100%'
  },
  listContainer: {
    marginTop: 20,
    flex: 1,
    backgroundColor: colors.purple,
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '95%',
    maxHeight: '63%',
    borderRadius: 10
  },
  list: {
    paddingHorizontal: 20,
  },
})

export default styles;