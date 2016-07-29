import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  open: false,
};

EventHorizon.createStore('modal', defaultStore);

export default defaultStore;
