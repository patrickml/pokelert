import EventHorizon from 'react-native-event-horizon';

EventHorizon.createAction('location', 'UPDATE_LOCATION', (store, location, update) => {
  update({
    latitude: location.latitude,
    longitude: location.longitude,
  });
});

export default (region) => EventHorizon.dispatch('UPDATE_LOCATION', region);
