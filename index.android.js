import { AppRegistry, StatusBar } from 'react-native';


/* App */
import NuevoMonit from './src/nuevo';

// StatusBar.setBarStyle('light-content'); //default Android light-content
StatusBar.setBackgroundColor('#29b765'); // #2ecc71 5%dark
AppRegistry.registerComponent('NuevoMonit',()=> NuevoMonit);
