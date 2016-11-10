import React, {Component} from 'react';
import {ListView, TextInput, Text, View, Image, Platform, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";

import Toolbar from "../toolbar";
import styles from "../styles";
class NuevoDash extends Component {
  render(){
    console.log("Dahs","Render");
    return(
      <View style={styles.layout}>
          <Toolbar name="Dashboard"/>
          <View style={styles.templateLayout}>
              <TouchableOpacity
                  style={styles.templateRow}
                  onPress={Actions.intro}>
                  <Image style={styles.templateImage} source={require('../../img/icon-set/intro.png')} />
                  <Text style={styles.templateMenu}>Intro</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.templateRow}
                  onPress={Actions.login}>
                  <Image style={styles.templateImage} source={require('../../img/icon-set/signup.png')} />
                  <Text style={styles.templateMenu}>Sign In</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.templateRow}
                  onPress={Actions.home}>
                  <Image style={styles.templateImage} source={require('../../img/icon-set/category.png')} />
                  <Text style={styles.templateMenu}>Trackers</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.templateRow}
                  onPress={Actions.notifications}>
                  <Image style={styles.templateImage} source={require('../../img/icon-set/products.png')} />
                  <Text style={styles.templateMenu}>Notifications</Text>
              </TouchableOpacity>
          </View>
      </View>
    );
  }
}

NuevoDash.propTypes = {
  firebaseApp: React.PropTypes.object,
  navigator: React.PropTypes.object
};

export default NuevoDash;
