import React, { Component } from 'react';
import firebaseApp from "./fireinit";
import {Switch} from "react-native-router-flux";

class NuevoSwitch extends Component {

  constructor(props){
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentWillMount() {
    firebaseApp.auth().onAuthStateChanged( user =>
      this.setState({loggedIn: !!user})
    );
  }

  render() {
    return <Switch loggedIn={this.state.loggedIn} {...this.props}/>;
  }
}

export default NuevoSwitch;
