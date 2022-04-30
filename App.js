import React from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import LoginScreen from './screens/login';
import { AppDrawerNavigator } from './components/AppDrawerNavigator'
import { AppTabNavigator } from './components/AppTabNavigator'


export default function App() {
  return (
    <AppContainer/> 
  );
}


const switchNavigator = createSwitchNavigator({
  WelcomeScreen:{screen: LoginScreen},
  Drawer:{screen: AppDrawerNavigator},
  BottomTab: {screen: AppTabNavigator},
})

const AppContainer =  createAppContainer(switchNavigator);
