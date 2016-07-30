import EventHorizon from 'react-native-event-horizon';
import { savePokemonFilter, removePokemonFilter } from '../util/fs';

EventHorizon.createAction('menu', 'TRIGGER_OPEN_MENU', (store, open, update) => {
  if (store.open !== open) {
    update({ open });
  }
});

EventHorizon.createAction('menu', 'TOGGLE_OPEN_MENU', (store, data, update) => {
  update({ open: !store.open });
});

EventHorizon.createAction('menu', 'ADD_INIT_FILTER_POKEMON', (store, filtered, update) => {
  update({
    filtered,
  });
});

EventHorizon.createAction('menu', 'ADD_FILTER_POKEMON', (store, id, update) => {
  update({
    filtered: [
      ...store.filtered,
      id,
    ],
  });
});

EventHorizon.createAction('menu', 'REMOVE_FILTER_POKEMON', (store, id, update) => {
  update({
    filtered: store.filtered.filter(o => o !== id),
  });
});

export const openMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', true);
export const closeMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', false);
export const setMenuState = (open) => EventHorizon.dispatch('TRIGGER_OPEN_MENU', open);
export const toggleMenu = () => EventHorizon.dispatch('TOGGLE_OPEN_MENU');
export const addInitialFiltered = (data) => EventHorizon.dispatch('ADD_INIT_FILTER_POKEMON', data);
export const addPokemonToFilter = (id) =>
  EventHorizon.dispatch('ADD_FILTER_POKEMON', id)
    .then(() => savePokemonFilter(id));
export const removePokemonToFilter = (id) =>
  EventHorizon.dispatch('REMOVE_FILTER_POKEMON', id)
    .then(() => removePokemonFilter(id));
