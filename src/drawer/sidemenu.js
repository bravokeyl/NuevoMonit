import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage } from "react-native";
import {Actions} from "react-native-router-flux";
/* eslint-disable */
import Icon from "react-native-vector-icons/MaterialIcons";
import SplashScreen from 'react-native-splash-screen';
/* eslint-enable */

import styles from "./styles";
import firebaseApp from "../fireinit";

const NuevoAuth = firebaseApp.auth();
class NuevoSideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      "displayName": "NuevoDefault",
      "email": "default@nuevosol.solar",
      "avatarURI": "https://www.gravatar.com/avatar/7780bc2150ca3131e41fb070f6583790"
    };

    this.signOut = this.signOut.bind(this);
    this.borderUtil = this.borderUtil.bind(this);
  }
  componentWillMount(){
      console.log("Component NuevoSideMenu Will Mount");
      NuevoAuth.onAuthStateChanged((user) => {
        console.log("SideMenu: onAuthStateChange");
        this.setState({loggedIn: !!user});
        if (user) {
          this.setState({
            "displayName": user.displayName,
            "email": user.email,
            "avatarURI": user.photoURL
          });
        } else {
          console.log("No user loggedIn as of ");
          return;
        }
      });
  }

  componentDidMount(){
    console.log("Component NuevoSideMenu Did Mount");

    SplashScreen.hide();
  }

  signOut(){
    console.log("Log out button clicked");
    firebaseApp.auth().signOut().then(function() {
      Actions.login();
      console.log('Signed Out');
    }, function(error) {
      console.error('Sign Out Error', error);
    });
  }

  borderUtil(c){
    return {
      borderWidth: 3,
      borderColor: c
    };
  }

  render() {
    let user = NuevoAuth.currentUser;
    console.log("Rendering NuevoSideMenu.",this.state,"User",user,"Props",this.props);

    return (
      <ScrollView>
        <View style={[styles.sideMenuLeft, this.props.menuBody]}>
            <View style={[styles.menuTop]}>
              <Image source={require('../../img/bg.jpg')}
                style={[styles.menuTopBg]}>
                <Image style={[styles.avatar]}
                       source={{uri: this.state.avatarURI}} />
                     <View style={[styles.profileInfo]}>
                  <Text style={[styles.fullname]}>{this.state.displayName}</Text>
                  <Text style={[styles.email]}>{this.state.email}</Text>
                </View>
              </Image>
            </View>
            <View style={styles.menuItems}>
              <TouchableOpacity
                  style={[styles.menuRowLeft, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={Actions.dashboard}>
                  <Icon name={'home'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, this.props.textColor]}>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.menuRowLeft, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={Actions.home}>
                  <Icon name={'line-style'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, this.props.textColor]}>Trackers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.menuRowLeft, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={Actions.notifications}>
                  <Icon name={'notifications'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, this.props.textColor]}>Notifications</Text>

                  <View style={[styles.badge,this.borderUtil("blue"),{flex:1,width: 40}]} >
                      <Image source={require('../../img/circle.png')}
                             style={styles.badgeIcon}><Text style={[styles.badgeText,this.borderUtil("red")]}>4</Text></Image>
                  </View>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.menuRowLeft, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={Actions.templates}>
                  <Icon name={'settings'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, this.props.textColor]}>Settings</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.menuRowLeft, styles.menuSignOut, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={this.signOut}>
                  <Icon name={'power-settings-new'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, styles.logoutLinkLeft, this.props.textColor]}>Logout</Text>
              </TouchableOpacity>
            </View>
        </View>
      </ScrollView>
    );
  }
}

NuevoSideMenu.propTypes = {
  menuBody: React.PropTypes.number,
  rowStyle: React.PropTypes.number,
  textColor: React.PropTypes.object,
  iconStyle: React.PropTypes.number
};

export default NuevoSideMenu;
