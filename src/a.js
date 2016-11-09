import React, { Component } from 'react';
import { View, Text } from 'react-native';

// import styles from '../styles/home'

class AnotherComponent extends Component {
    render(){
        return (
          <View style={{
                alignItems: 'center',
                backgroundColor: '#FFF',
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                top: 70
            }}>
                <Text>AnotherComponent Screen</Text>
            </View>
        );
    }
}

export default AnotherComponent;
