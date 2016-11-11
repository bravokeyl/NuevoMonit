import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableNativeFeedback, AsyncStorage } from 'react-native';
import {Actions} from "react-native-router-flux";

/* Import Login Styles */
import styles from './styles';

import loginBg from '../../img/login.png';
import logo from '../../img/logo-white.png';

import NuevoDash from '../dash';

import firebaseApp from "../fireinit";

const NuevoAuth = firebaseApp.auth();

export default class NuevoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      error: "",
      message: "",
      loggedIn: false
    };
    this.signIn = this.signIn.bind(this);
  }
  componentWillMount() {
    console.log("Component NuevoLogin Will Mount");
    AsyncStorage.clear();
    NuevoAuth.onAuthStateChanged((user) => {
      console.log("Login: onAuthStateChange");
      this.setState({loggedIn: !!user});
      if (user) {
        console.log("User logged In", user);
        // user.updateProfile({
        //   displayName: "Azure Power",
        //   photoURL: "http://www.azurepower.com/wp-content/themes/azure/images/favicon.ico"
        // }).then(function() {
        //   console.log("Success updating profile");
        // }, function(error) {
        //   console.log("Error updating profile");
        // });
        Actions.dashboard();
      } else {

        console.log("No user loggedIn as of now");
        return;
      }
    });
  }
  componentDidMount(){
    console.log("Component NuevoLogin Did Mount");
  }
  signIn() {
    let self = this;
    console.log(this.state.username, this.state.password,"Filled");
    NuevoAuth
    .signInWithEmailAndPassword(this.state.username, this.state.password)
    .then((res) => {
        this.setState({
          username: "",
          password: "",
          error: "",
          message: ""
        });
        AsyncStorage.setItem('pithre',"Pithre Data");
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
    });
  }
  render() {
    console.log("Rendering NuevoLogin...",this.state);
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
            onPress={this.signIn}
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
