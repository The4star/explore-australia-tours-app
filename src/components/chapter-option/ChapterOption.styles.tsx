import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20
  },
  borderBottom: {
    borderBottomColor: colors.green,
    borderBottomWidth: 2
  },
  name: {
    width: '50%',
    textAlign: 'center',
    color: colors.green,
    fontFamily: 'open-sans-bold'
  },
  text: {
    textAlign: 'center',
    fontFamily: 'open-sans-bold'
  },
  ctaSection: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'space-around'
  },
  button: {
    alignItems: 'center',
  },
  buttonImage: {
    marginBottom: 5
  }
})

export default styles;