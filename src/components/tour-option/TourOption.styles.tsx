import { HeaderHeightContext } from '@react-navigation/stack';
import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  card: {
    height: 175,
    margin: 10,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
  },
  imageContainer: {
    height: '80%',
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'center'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.purple,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  text: {
    color: colors.green,
    fontFamily: 'open-sans-bold'
  }
})

export default styles;