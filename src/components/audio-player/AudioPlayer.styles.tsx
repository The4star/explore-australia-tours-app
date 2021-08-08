import { HeaderHeightContext } from '@react-navigation/stack';
import React from 'react';

import { StyleSheet } from 'react-native';
import colors from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    alignItems: 'center'
  },
  controls: {
    flexDirection: 'row',

  },
  playButton: {
    height: 100,
    width: 100,
    backgroundColor: colors.purple,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center'
  },
  statusBar: {
    marginTop: 20,
    width: '80%',
    height: 5,
    backgroundColor: colors.purple
  },
  position: {
    height: 5,
    backgroundColor: colors.green
  },
  time: {
    marginTop: 20
  },
  timeText: {
    fontFamily: 'open-sans'
  }

})

export default styles;