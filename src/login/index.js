import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableNativeFeedback, AsyncStorage } from 'react-native';
import {Actions} from "react-native-router-flux";

/* Import Login Styles */
import styles from './styles';

import loginBg from '../../img/login.png';
import logo from '../../img/logo-white.png';

import NuevoDash from '../dash';

import firebaseApp from "../fireinit";

import LogLifecyle from 'react-log-lifecycle';
const NuevoAuth = firebaseApp.auth();

export default class NuevoLogin extends LogLifecyle {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      message: "",
      loggedIn: false
    };
    this.signup = this.signup.bind(this);
  }
  componentWillMount() {
    console.log("Compoent Will Mount,Login");
    NuevoAuth.onAuthStateChanged((user) => {
      this.setState({loggedIn: !!user});
      if (user) {
        console.log("User logged In", user);
        Actions.dashboard();
      } else {
        console.log("No user loggedIn as of now");
        return;
      }
    });
  }
  signup() {
    let self = this;
    console.log(this.state.username, this.state.password,"Filled");
    NuevoAuth
    .signInWithEmailAndPassword(this.state.username, this.state.password)
    .then((res) => {
        console.log("Current",res);
        this.state = {
          username: "",
          password: "",
          error: "",
          message: ""
        };
        // AsyncStorage.setItem('pithre', JSON.stringify(res));

        Actions.dashboard();
    })
    .catch((err) => {
      console.log(err);
      this.setState({error: err.code});
      if (err.code === 'auth/wrong-password') {
        this.setState({password: '',message:"Wrong password."});
      } else {
        this.setState({password: '',message: "Invalid credentials."});
      }
      console.log(self.state);
    });
  }
  render() {
    console.log(this.state.username,this.state.password,"Rendering");
    return(
      <Image source={loginBg} style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <View style={styles.formContainer}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value = {this.state.username}
            onChangeText={(text)=>this.setState({username: text})}
            underlineColorAndroid="azure" style={styles.input}/>
          <Text style={styles.label}>Password</Text>
          <TextInput
            secureTextEntry
            value = {this.state.password}
            onChangeText={(text)=>this.setState({password: text})}
            underlineColorAndroid="azure" style={styles.input}/>
          <Text>{this.state.message}</Text>
          <TouchableNativeFeedback
            onPress={this.signup}
          background={TouchableNativeFeedback.SelectableBackground()}>
            <View><Text style={styles.loginButton}>Log In</Text></View>
          </TouchableNativeFeedback>
        </View>
      </Image>
    );
  }
}

NuevoLogin.propTypes = {
  firebaseApp: React.PropTypes.object,
  navigator: React.PropTypes.object
};
