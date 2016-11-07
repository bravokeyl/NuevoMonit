import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableNativeFeedback } from 'react-native';

/* Import Login Styles */
import styles from './styles';

import loginBg from '../../img/login.png';

import NuevoDash from '../dash';

export default class NuevoLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.signup = this.signup.bind(this);

  }

  signup() {
    console.log(this.state.username, this.state.password);
      this.props.firebaseApp.auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then((res) => {
        console.log("Current",res);
          this.props.navigator.push({
            component: NuevoDash
          });
      })
      .catch(function(err){
        console.log(err);
      });

  }

  render() {
    return(
      <Image source={loginBg} style={styles.container}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          onChangeText={(text)=>this.setState({username: text})}
          underlineColorAndroid="azure" style={styles.input}/>
        <Text style={styles.label}>Password</Text>
        <TextInput
          secureTextEntry
          onChangeText={(text)=>this.setState({password: text})}
         underlineColorAndroid="azure" style={styles.input}/>
        <TouchableNativeFeedback
          onPress={this.signup}
        background={TouchableNativeFeedback.SelectableBackground()}>
          <View><Text style={styles.loginButton}>Log In</Text></View>
        </TouchableNativeFeedback>
      </Image>
    );
  }
}

NuevoLogin.propTypes = {
  firebaseApp: React.PropTypes.object,
  navigator: React.PropTypes.object
};
