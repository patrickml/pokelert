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

const MenuContent = () => (
  <View style={styles.container}>
    <PokemonList />
  </View>
);

const Menu = ({ open, children }) => (
  <Drawer
    isOpen={open}
    onChange={setMenuState}
    menu={<MenuContent />}
  >
    {children}
  </Drawer>
);

Menu.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.any,
};

const onPropsChange = (props, onData) => {
  console.log('menu props');
  onData(null, EventHorizon.subscribe('menu'));
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Menu);
