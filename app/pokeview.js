import React, { PropTypes } from 'react';
import { Modal } from 'react-native';
import { composeWithTracker } from 'react-komposer';
import EventHorizon from 'react-native-event-horizon';
import Loading from './loading';

const PokeModal = ({ open }) => (
  <Modal
    animationType={"slide"}
    transparent={false}
    visible={open}
  >

  </Modal>
);

PokeModal.propTypes = {
  open: PropTypes.bool,
};

const onPropsChange = (props, onData) => {
  onData(null, EventHorizon.subscribe('modal'));
};

export default composeWithTracker(onPropsChange, Loading, Loading)(PokeModal);
