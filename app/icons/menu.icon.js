import React from 'react';
import { StyleSheet } from 'react-native';
import { toggleMenu } from '../actions/menu.actions';
import Icon from './icon';
import menuIcon from '../assets/images/icons/menu/menu.png';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

export default () => (
  <Icon
    onPress={() => toggleMenu()}
    styles={{ container: styles.container, image: styles.icon }}
    image={menuIcon}
  />
);
