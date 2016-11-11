import React, { Component } from 'react';
import { Navigator, TouchableOpacity } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
/*eslint-disable */
import Drawer from 'react-native-drawer';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FCM from 'react-native-fcm';
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


export default class NuevoMonit extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    console.log("Component NuevoMonit Did Mount");
      // FCM.requestPermissions(); // for iOS
      FCM.getFCMToken().then(token => {
          console.log(token);
          // store fcm token in your server
      });
      this.notificationUnsubscribe = FCM.on('notification', (notif) => {
          // there are two parts of notif. notif.notification contains the notification payload, notif.data contains data payload
          if(notif.local_notification){
            //this is a local notification
          }
          if(notif.opened_from_tray){
            //app is open/resumed because user clicked banner
          }
      });
      this.refreshUnsubscribe = FCM.on('refreshToken', (token) => {
          console.log(token);
          // fcm token may not be available on first load, catch it here
      });

  }

  componentWillUnmount() {
      // prevent leaking
      this.refreshUnsubscribe();
      this.notificationUnsubscribe();
  }

  render() {
    console.log("Rendering NuevoMonit...");
    const rootSelector = (props) => props.loggedIn ? 'nuevoScreens' : 'authScreens';
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
