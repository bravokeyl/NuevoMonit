import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
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
                <Text>Home Screen</Text>
            </View>
        );
    }
}

export default Home;
