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

import NuevoSwitch from './switch';

import styles from './styles';

import LogLifecyle from 'react-log-lifecycle';

export default class NuevoMonit extends LogLifecyle {
  constructor(props){
    super(props);
  }

  render() {
    const rootSelector = (props) => props.loggedIn ? 'nuevoScreens' : 'authScreens';
    console.log(this.props.loggedIn,rootSelector,"renderNuevo");
    const scenes = Actions.create(
      <Scene key="root" tabs component={NuevoSwitch} selector={rootSelector}>
        <Scene key="authScreens" hideNavBar>
          <Scene key="login" title="Login" component={NuevoLogin} initial />
        </Scene>
        <Scene key="nuevoScreens" >
          <Scene key="dashboard" title="Dashboard" component={NuevoDash} initial />
          <Scene key="home" title="Home" component={NuevoHome} />
          <Scene key="notifications" title="Notifications" component={NuevoNotifications} />
        </Scene>
      </Scene>
    );
    return(
      <NuevoDrawer scenes={scenes}/>
    );
  }
}


NuevoMonit.propTypes = {

};
