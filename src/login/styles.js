import React from 'react';
import { StyleSheet, Dimensions, Platform } from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'#2ecc71',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'stretch',
    margin: 0,
    padding: 0,
  },
  logo: {
    flex: 1,
    width: 100,
    height: 100,
    marginTop: 40,
    resizeMode: "contain",
  },
  formContainer: {
    flex: 2,
    alignItems: 'center',
    alignSelf: 'center',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Roboto',
    color: '#F7F8FA',
  },
  input: {
    height: 40,
    padding: 4,
    borderRadius: 5,
    margin: 5,
    alignSelf: 'center',
    width: 250,
    color: '#F7F8FA',
  },
  loginButton: {
    fontFamily: 'Roboto',
    height: 40,
    borderRadius: 100,
    padding: 5,
    marginTop: 10,
    width: 200,
    textAlignVertical: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    color: '#2ecc71',
  },
  loginButtonText: {
    flex: 1,
    alignSelf: 'center',
    fontSize: 18,
  }
});

export default styles;
