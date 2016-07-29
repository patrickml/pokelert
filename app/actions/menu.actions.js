import EventHorizon from 'react-native-event-horizon';
import fetchPokemon from '../fetch';

EventHorizon.createAction('menu', 'TRIGGER_OPEN_MENU', (store, open, update) => {
  console.log('MENU', open);
  if (store.open !== open) {
    update({ open });
  }
});

export const openMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', true);
export const closeMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', false);
