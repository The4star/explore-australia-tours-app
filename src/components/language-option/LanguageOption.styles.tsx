import { HeaderHeightContext } from '@react-navigation/stack';
import React from 'react';

import { Platform, StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
    height: 100,
    marginTop: 10,
    shadowColor: 'black',
    shadowOpacity: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderColor: colors.purple,
    borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderRadius: 10,
    opacity: Platform.OS === 'android' ? .8 : .5
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    backgroundColor: Platform.OS === 'android' ? colors.purple : "rgba(52, 52, 52, 0)",
    paddingVertical: 5,
    paddingHorizontal: 5,
    borderRadius: 5,
    fontFamily: 'open-sans-bold',
    color: 'white',
    textShadowColor: colors.purple,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 0,
  }
})

export default styles;