import React,{Component} from 'react';
import {StyleSheet,Text,View,TouchableOpacity} from 'react-native';
/*eslint-disable*/
import Icon from 'react-native-vector-icons/Ionicons';
/*eslint-enable*/

class NuevoTabs extends Component {

  constructor(props){
    super(props);
    this.tabIcons = [];
    this.setAnimationValue = this.setAnimationValue.bind(this);
    this.iconColor = this.iconColor.bind(this);
  }

  componentDidMount() {
      this._listener = this.props.scrollValue.addListener(this.setAnimationValue);
  }

  setAnimationValue({ value, }) {
      this.tabIcons.forEach((icon, i) => {
          const progress = (value - i >= 0 && value - i <= 1) ? value - i : 1;
          icon.setNativeProps({
              style: {
                  color: this.iconColor(progress),
              },
          });
      });
  }

  iconColor(progress) {
      const red = 46 + (204 - 46) * progress;
      const blue = 113 + (204 - 113) * progress;
      return `rgb(${red}, 204, ${blue})`;
  }

  render() {
      return (<View style={[styles.tabs]}>
          {this.props.tabs.map((tab, i) => {
              return (<TouchableOpacity key={tab}
                onPress={() => this.props.goToPage(i)} style={styles.tab}>
                  <Icon
                      name={tab}
                      size={30}
                      color={this.props.activeTab === i ? '#2ecc71' : 'rgb(204,204,204)'}
                      ref={(icon) => { this.tabIcons[i] = icon; }}
                  />
              </TouchableOpacity>);
          })}
      </View>);
  }
}


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 10,
    },
    tabs: {
        height: 45,
        flexDirection: 'row',
        paddingTop: 5,
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: 'rgba(0,0,0,0.05)'
    }
});

NuevoTabs.propTypes = {
    goToPage: React.PropTypes.func,
    activeTab: React.PropTypes.number,
    tabs: React.PropTypes.array,
};

export default NuevoTabs;
