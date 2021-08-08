import React from 'react';

import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    elevation: 1,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    margin: 20,
    maxHeight: '63%'
  },
  text: {
    fontFamily: 'open-sans-bold'
  }
})

export default styles;