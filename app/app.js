/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native'
import './index';
import Map from './map';
import Fetching from './fetching';
import Menu from './menu';

class App extends Component {
  render() {
    return (
      <Menu>
        <View style={styles.container}>
          <Map />
          <Fetching />
        </View>
      </Menu>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column'
  },
});

AppRegistry.registerComponent('pokelert', () => App);
