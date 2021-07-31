import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    marginTop: 30
  },
  logoContainer: {
    width: '50%',
  },
  logo: {
    width: '100%',
    resizeMode: "contain"
  },
  plButton: {
    backgroundColor: colors.purple,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  plButtonText: {
    color: 'white',
    fontFamily: 'open-sans-bold'
  },
  plBelowText: {
    fontFamily: 'open-sans-bold',
    textAlign: "center",
    marginVertical: 20
  }
})

export default styles;