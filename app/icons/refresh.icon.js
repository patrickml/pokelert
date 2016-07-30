import React from 'react';
import { StyleSheet, Alert } from 'react-native';
import EventHorizon from 'react-native-event-horizon';
import fetchPokemon from '../fetch';
import Icon from './icon';
import refreshIcon from '../assets/images/icons/refresh.png';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 30,
    right: 15,
    opacity: 0.5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});

const triggerRefresh = () => {
  const { time } = EventHorizon.subscribe('timer');
  if (time === 0) {
    fetchPokemon();
  } else {
    Alert.alert(
      'Please Wait',
      `You still have ${time} seconds before you can refresh`,
      [
        { text: 'OK' },
      ]
    );
  }
};

export default () => (
  <Icon
    onPress={() => triggerRefresh()}
    styles={{ container: styles.container, image: styles.icon }}
    image={refreshIcon}
  />
);
