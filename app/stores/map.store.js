import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  pokemon: [],
  loading: false,
  track: true,
};

EventHorizon.createStore('map', defaultStore);

export default defaultStore;
