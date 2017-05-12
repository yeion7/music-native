/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

import Splash from './screens/Splash'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Splash />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
