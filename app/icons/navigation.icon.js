import React, { PropTypes } from 'react';
import { StyleSheet } from 'react-native';
import { toggleNavigation } from '../actions/map.actions';
import Icon from './icon';
import navigationIcon from '../assets/images/icons/navigation.png';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    left: 10,
  },
  icon: {
    width: 30,
    height: 30,
  },
});

const getStyle = (track) => [
  styles.icon, track && { opacity: 1 } || { opacity: 0.5 },
];

const NavigationIcon = ({ track }) => (
  <Icon
    onPress={() => toggleNavigation()}
    styles={{ container: styles.container, image: getStyle(track) }}
    image={navigationIcon}
  />
);

NavigationIcon.propTypes = {
  track: PropTypes.bool,
};

export default NavigationIcon;
