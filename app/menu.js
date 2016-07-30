import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Drawer from 'react-native-side-menu';
import EventHorizon from 'react-native-event-horizon';
import { composeWithTracker } from 'react-komposer';
import { setMenuState } from './actions/menu.actions';
import Loading from './loading';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#e2e2e2',
  },
});

const MenuContent = () => (
  <View style={styles.container}>
    <Text>Coming soon...</Text>
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
