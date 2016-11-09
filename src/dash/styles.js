import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'#512f54',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 0,
    padding: 0,
  },
});

export default styles;
