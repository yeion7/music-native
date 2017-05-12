/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import Splash from './screens/Splash'
import Main from './screens/Main'

const App = StackNavigator(
  {
  SplashScreen: {screen: Splash},
  MainScreen: {screen: Main},
  },
  {
    initialRouteName: 'SplashScreen',
  },
);

export default App
