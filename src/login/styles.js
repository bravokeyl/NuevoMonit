import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
  },
  input: {
    height: 40,
    padding: 4,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
    width: 200,
  },
  loginButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1,
    padding: 5,
    borderColor: 'black',
    marginTop: 10,
  },
  loginButtonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
  }
});

export default styles;
