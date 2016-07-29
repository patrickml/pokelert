import React from 'react';
import { View, Text } from 'react-native';
import Drawer from 'react-native-side-menu'
import EventHorizon from 'react-native-event-horizon';
import { composeWithTracker } from 'react-komposer';
import Loading from './loading';

const MenuContent = () => (
  <View style={{
    flex: 1,
    padding: 20,
    backgroundColor: '#e2e2e2',
  }}>
    <Text>Test</Text>
  </View>
);

const Menu = ({ open, children }) => (
  <Drawer
    isOpen={open}
    menu={<MenuContent />}
  >
    {children}
  </Drawer>
);

const onPropsChange = (props, onData) => {
  console.log('menu props');
  onData(null, EventHorizon.subscribe('menu'));
};

export default composeWithTracker(onPropsChange, Loading, Loading)(Menu);
