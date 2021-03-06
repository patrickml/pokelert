/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
} from 'react-native';
import './index';
import Map from './map';
import Fetching from './fetching';
import Menu from './menu';
import { loadLocalData } from './util/fs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
});

const App = () => (
  <Menu>
    <View style={styles.container}>
      <Map />
      <Fetching />
    </View>
  </Menu>
);

loadLocalData();

AppRegistry.registerComponent('pokelert', () => App);
