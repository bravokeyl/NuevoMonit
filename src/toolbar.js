import React, {Component} from "react";
import {Text, View, TouchableOpacity, Image} from "react-native";
import {Actions} from "react-native-router-flux";
/*eslint-disable */
import Icon from "react-native-vector-icons/MaterialIcons";
/*eslint-enable */
import styles from "./styles";
import AppEventEmitter from "./emitter";
import IconImage from "./iconimage";

export default class Toolbar extends Component {
    open() {
        AppEventEmitter.emit('hamburger.click');
    }

    render() {
        const self = this;

        const homeButton = function () {
            if (typeof self.props.isChild != 'undefined') {
                return (
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TouchableOpacity onPress={self.props.action ? self.props.action : Actions.product}>
                            <Icon name={'arrow-left'} style={[styles.icon, styles.iconBack]}/>
                            <Text style={{marginLeft: 20}}>back</Text>
                        </TouchableOpacity>
                    </View>
                );
            }
            return (
                <View style={{flexDirection:'row',alignItems:'center'}}>
                    <TouchableOpacity onPress={self.open}>
                        <Icon name={'menu'} style={[styles.icon,{fontSize:24}]}/>
                    </TouchableOpacity>
                </View>
            );
        };

        return (
            <View style={[styles.toolbarMenu,{backgroundColor:"#2ecc71"}]}>
                {homeButton()}

                <View style={styles.toolbarTitleView}>
                    <Text style={[styles.toolbarTitle,{color:"white"}]}>{this.props.name}</Text>
                </View>

                <View style={{flexDirection:'row',alignItems:'center'}}>
                    {self.props.layoutButton ? <IconImage action={Actions.productgrid} image={require('../img/icon-window.png')} /> : null }
                    {self.props.gridButton ? <IconImage action={Actions.product} image={require('../img/icon-list.png')} /> : null }
                    {self.props.heartButton ? <IconImage action={Actions.wishlist} image={require('../img/icon-heart.png')} /> : null }
                    <Icon name={'more-vert'} style={[styles.icon,{fontSize:24}]}/>
                    {self.props.searchButton ? <IconImage image={require('../img/icon-search.png')} /> : null }
                </View>
            </View>
        );
    }
}
