import React, { PropTypes } from 'react';
import { View, StyleSheet } from 'react-native';
import Drawer from 'react-native-side-menu';
import EventHorizon from 'react-native-event-horizon';
import { composeWithTracker } from 'react-komposer';
import { setMenuState } from './actions/menu.actions';
import Loading from './loading';
import PokemonList from './pokemon-list';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

const MenuContent = ({ filtered }) => (
  <View style={styles.container}>
    <PokemonList filtered={filtered} />
  </View>
);

const Menu = ({ open, children, filtered }) => (
  <Drawer
    isOpen={open}
    onChange={setMenuState}
    menu={<MenuContent filtered={filtered} />}
  >
    {children}
  </Drawer>
);

MenuContent.propTypes = {
  filtered: PropTypes.array,
};

Menu.propTypes = {
  open: PropTypes.bool,
  filtered: PropTypes.array,
  children: PropTypes.any,
};

const onPropsChange = (props, onData) => {
  onData(null, EventHorizon.subscribe('menu'));
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Menu);
