import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  time: 0,
};

EventHorizon.createStore('timer', defaultStore);

export default defaultStore;
