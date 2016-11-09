import React, {Component} from 'react';
import {Text,View, ListView} from 'react-native';
import { Router } from 'react-native-router-flux';
/* eslint-disable */
import Drawer from 'react-native-drawer';
/* eslint-enable */
import AppEventEmitter from '../emitter';
import NuevoSideMenu from './sidemenu';
import styles from './styles';


class NuevoDrawer extends Component {
  constructor(props){
    super(props);
    this.closeSideMenu = this.closeSideMenu.bind(this);
  }

  componentDidMount() {
      AppEventEmitter.addListener('hamburger.click', this.openSideMenu.bind(this));
  }

  closeSideMenu() {
      if (typeof this.refs.drawer != 'undefined') {
        this.refs.drawer.close();
      }
  }

  openSideMenu() {
      this.refs.drawer.open();
  }

  render() {
    return(
      <Drawer
        ref="drawer"
        type="static"
        tweenHandler={Drawer.tweenPresets.parallax}
        tapToClose
        backgroundColor="rgba(45, 47, 59, 1)"
        panCloseMask={0.2}
        panThreshold={0.2}
        openDrawerOffset={0.2}
        content={<NuevoSideMenu />}
      >
        <Router hideNavBar dispatch={this.closeSideMenu} scenes={this.props.scenes}/>
      </Drawer>
    );
  }
}

NuevoDrawer.propTypes = {
  scenes: React.PropTypes.object
};

export default NuevoDrawer;
