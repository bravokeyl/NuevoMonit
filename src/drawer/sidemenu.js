import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image, ScrollView} from "react-native";
import {Actions} from "react-native-router-flux";
/* eslint-disable */
import Icon from "react-native-vector-icons/MaterialIcons";
/* eslint-enable */

import styles from "./styles";

class NuevoSideMenu extends Component {
  constructor(props){
    super(props);
    this.borderUtil = this.borderUtil.bind(this);
  }
  borderUtil(c){
    return {
      borderWidth: 3,
      borderColor: c
    };
  }
  render() {
    return (
      <ScrollView>
        <View style={[styles.sideMenuLeft, this.props.menuBody]}>
            <View style={[styles.menuTop]}>
              <Image source={require('../../img/bg.jpg')}
                style={[styles.menuTopBg]}>
                <Image style={[styles.avatar]}
                       source={require('../../img/avatar.jpg')} />
                     <View style={[styles.profileInfo]}>
                  <Text style={[styles.fullname]}>Azure Power</Text>
                  <Text style={[styles.email]}>bk@nuevosol.solar</Text>
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
                  onPress={Actions.news}>
                  <Icon name={'line-style'} style={[styles.icon, this.props.iconStyle]}/>
                  <Text style={[styles.menuLinkLeft, this.props.textColor]}>Trackers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={[styles.menuRowLeft, this.props.rowStyle]}
                  underlayColor="#2D2D30"
                  onPress={Actions.wooProduct}>
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
                  onPress={Actions.login}>
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
