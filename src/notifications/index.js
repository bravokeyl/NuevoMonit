import React, {Component} from "react";
import {ListView, Text, View, Image, TabBarIOS, TouchableOpacity, ScrollView, StyleSheet} from "react-native";
import {Actions} from "react-native-router-flux";
import ScrollableTabView, {ScrollableTabBar} from "react-native-scrollable-tab-view";

import TrackerNotifications from "./tracker";
import BatteryNotifications from "./battery";
import NuevoTabs from "../tabbar";

class NuevoNotifications extends Component {
    constructor(props) {
        super(props);
        this.state = {selectedTab: 'tabOne'};
    }

    render() {
        return (
            <ScrollableTabView
                tabBarPosition={"bottom"}
                locked renderTabBar={() => <NuevoTabs />}>
                <TrackerNotifications tabLabel="md-battery-charging"/>
                <BatteryNotifications tabLabel="md-notifications"/>
            </ScrollableTabView>
        );
    }
}

export default NuevoNotifications;
