import EventHorizon from 'react-native-event-horizon';

const defaultStore = {
  location: {
    latitude: 35.304251,
    longitude: -80.964981,
  },
  pokemon: [],
  loading: false,
};

EventHorizon.createStore('map', defaultStore);

export default defaultStore;
