import React, { Component } from 'react';
import { Navigator } from 'react-native';


import NuevoLogin from './login';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyChkhG-yG8V1YQhIJuyCYbQ7u10-QHgBl8",
  authDomain: "nuevomonit.firebaseapp.com",
  databaseURL: "https://nuevomonit.firebaseio.com",
  storageBucket: "nuevomonit.appspot.com",
  messagingSenderId: "177534084474"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class NuevoMonit extends Component {
  render() {
    return(
      <Navigator
        initialRoute={{component: NuevoLogin}}
        renderScene={(route, navigator) => {
          if(route.component){
            // Pass the navigator the the component so it can navigate as well.
            // Pass firebaseApp so it can make calls to firebase.
            return React.createElement(route.component, { navigator, firebaseApp});
          }
      }} />

    );
  }
}

NuevoMonit.propTypes = {

};
