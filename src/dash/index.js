import React, {Component} from 'react';
import {ListView, TextInput, Text, View, Image, Platform, TouchableOpacity, AsyncStorage,ScrollView, StyleSheet} from 'react-native';
import {Actions} from "react-native-router-flux";

import Toolbar from "../toolbar";
import styles from "../styles";

import firebaseApp from "../fireinit";

const NuevoAuth = firebaseApp.auth();

class NuevoDash extends Component {

  render(){
    console.log("Dashboard","Render",NuevoAuth.currentUser.email);
      // AsyncStorage.getAllKeys((err, keys) => {
      //   console.log(keys);
      //   AsyncStorage.multiGet(keys, (err, stores) => {
      //    stores.map((result, i, store) => {
      //      // get at each store's key/value so you can work with it
      //      let key = store[i][0];
      //      let value = store[i][1];
      //      console.log(key,value);
      //     });
      //   });
      // });
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
