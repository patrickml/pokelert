import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  open: false,
};

EventHorizon.createStore('menu', defaultStore);

export default defaultStore;
