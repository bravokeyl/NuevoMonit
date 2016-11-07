import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableHighlight } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Icon } from 'native-base';

/* Import Login Styles */
import styles from './styles';

import loginBg from '../../img/login-bg.png';

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
      <Container>
        <Header>
            <Title>NuevoMonit</Title>
            <Button transparent>
                <Icon name="md-menu" />
            </Button>
        </Header>

        <Content>
            <Text>ashadajh</Text>
        </Content>
      </Container>
    );
  }
}

NuevoLogin.propTypes = {
  firebaseApp: React.PropTypes.object
};
