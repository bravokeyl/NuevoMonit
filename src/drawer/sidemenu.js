import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView, AsyncStorage } from "react-native";
import {Actions} from "react-native-router-flux";
/* eslint-disable */
import Icon from "react-native-vector-icons/MaterialIcons";
import SplashScreen from 'react-native-splash-screen';
/* eslint-enable */

import styles from "./styles";
import firebaseApp from "../fireinit";

class NuevoSideMenu extends Component {
  constructor(props){
    super(props);
    this.state = {
      "displayName": "",
      "email": ""
    };

    this.signOut = this.signOut.bind(this);
    this.borderUtil = this.borderUtil.bind(this);
  }
  componentWillMount(){
    console.log(this.state.email);
      AsyncStorage.getItem("pithre").then((value) => {
          console.log(this.state,"ComponentWillMount");
          // this.setState({
          //   "displayName": JSON.parse(value).displayName ,
          //   "email": JSON.parse(value).email
          // });
      }).done();
  }

  componentDidMount(){
    console.log("Component SideMenu Did Mount",SplashScreen);
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
    console.log("Render SideMenu component",this.state);
    return (
      <ScrollView>
        <View style={[styles.sideMenuLeft, this.props.menuBody]}>
            <View style={[styles.menuTop]}>
              <Image source={require('../../img/bg.jpg')}
                style={[styles.menuTopBg]}>
                <Image style={[styles.avatar]}
                       source={require('../../img/avatar.jpg')} />
                     <View style={[styles.profileInfo]}>
                  <Text style={[styles.fullname]}>Azure Power, {this.state.displayName}</Text>
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
