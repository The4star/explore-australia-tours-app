import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  screen: {
    flex: 1,
    alignItems: 'center'
  },
  imageContainer: {
    width: '100%',
    height: 200,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  contentContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    maxHeight: 250
  },
  plButton: {
    marginTop: 20,
    backgroundColor: colors.purple,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5
  },
  plButtonText: {
    color: 'white',
    fontFamily: 'open-sans-bold'
  },
})

export default styles;