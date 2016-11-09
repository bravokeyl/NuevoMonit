import React, { Component } from 'react';
import { Navigator, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
/*eslint-disable */
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
/*eslint-enable */
import NuevoDrawer from './drawer';

import NuevoLogin from './login';
/*eslint-disable */
import NuevoDash from './dash';
/*eslint-enable */
import NuevoHome from './home';
import NuevoNotifications from './notifications';
import SideMenu from './drawer/sidemenu';
import * as firebase from 'firebase';

import styles from './styles';

// const firebaseConfig = {
//   apiKey: "AIzaSyChkhG-yG8V1YQhIJuyCYbQ7u10-QHgBl8",
//   authDomain: "nuevomonit.firebaseapp.com",
//   databaseURL: "https://nuevomonit.firebaseio.com",
//   storageBucket: "nuevomonit.appspot.com",
//   messagingSenderId: "177534084474"
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

const drawerStyles = {
  drawer: { shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3},
  main: {paddingLeft: 3},
};
export default class NuevoMonit extends Component {
  constructor(props){
    super(props);
  }

  render() {
    const scenes = Actions.create(
      <Scene key="root">
        <Scene key="login" title="Login" component={NuevoLogin} />
        <Scene key="dashboard" title="Dashboard" component={NuevoDash} initial />
        <Scene key="home" title="Home" component={NuevoHome} />
        <Scene key="notifications" title="Notifications" component={NuevoNotifications} />
      </Scene>
    );
    return(
      <NuevoDrawer scenes={scenes}/>
    );
  }
}


NuevoMonit.propTypes = {

};
