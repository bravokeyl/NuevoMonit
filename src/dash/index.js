import React, {Component} from 'react';
import {Text,View} from 'react-native';

class NuevoDash extends Component {
  constructor(props){
    super(props);

  }
  componentWillMount() {
    // get the current user from firebase
    const userData = this.props.firebaseApp.auth().currentUser;
    this.setState({
      user: userData
    });
  }
  render() {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{flex: 1}}>Hola! Double Pithre!! {this.state.user.email}</Text>
      </View>
    );
  }
}

NuevoDash.propTypes = {
  firebaseApp: React.PropTypes.object,
  navigator: React.PropTypes.object
};

export default NuevoDash;
