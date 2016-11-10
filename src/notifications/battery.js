import React, {Component} from 'react';
import {ListView, TextInput, Text, View, Image, Platform, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";
/*eslint-disable*/
import Icon from "react-native-vector-icons/Ionicons";
/*eslint-enable*/

import Toolbar from "../toolbar";

import styles from "./styles";
class BatteryNotifications extends Component {
  render() {
      const unreadCard = (
          <TouchableOpacity style={styles.card}>
              <View style={{flexDirection:'row'}}>
                  <Icon name={'ios-notifications'} style={styles.unreadBell}/>

                  <View style={{marginLeft:10}}>
                      <Text style={styles.unreadHeader}>
                      Tracker {parseInt(Math.random()*10+9)} battery status
                      </Text>
                      <View style={styles.blockText}>
                          <Text style={styles.unreadText}>Motor successfully started,
                          it should reach the target angle and automatically stop.</Text>
                      </View>
                  </View>
              </View>
          </TouchableOpacity>
      );

      const readCard = (
          <TouchableOpacity style={styles.card}>
              <View style={{flexDirection:'row'}}>
                  <Icon name={'ios-notifications-outline'} style={styles.readBell}/>

                  <View style={{marginLeft:10}}>
                      <Text style={styles.readHeader}>Tracker {parseInt(Math.random()*10+9)} Motor started</Text>

                      <View style={styles.blockText}>
                          <Text style={styles.readText}>Motor successfully started,
                          it should reach the target angle and automatically stop.</Text>
                      </View>
                  </View>
              </View>
          </TouchableOpacity>
      );

      return (
          <View style={{flex: 1, backgroundColor: '#eee'}}>
              <Toolbar name="Battery"/>
              <ScrollView>
                  {unreadCard}
                  {unreadCard}
                  {unreadCard}
                  {unreadCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
                  {readCard}
              </ScrollView>
          </View>
      );
  }
}

BatteryNotifications.propTypes = {
};

export default BatteryNotifications;
