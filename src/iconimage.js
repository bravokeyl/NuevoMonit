import React, {Component} from "react";
import {Text, View, TouchableOpacity, TextInput, Image} from "react-native";
import styles from "./styles";

export default class IconImage extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.action} style={styles.imageIconView}>
                <Image source={this.props.image} style={styles.imageIcon} {...this.props} />
            </TouchableOpacity>
        );
    }
}
