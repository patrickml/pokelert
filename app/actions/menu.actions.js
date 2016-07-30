import EventHorizon from 'react-native-event-horizon';

EventHorizon.createAction('menu', 'TRIGGER_OPEN_MENU', (store, open, update) => {
  if (store.open !== open) {
    update({ open });
  }
});

EventHorizon.createAction('menu', 'TOGGLE_OPEN_MENU', (store, data, update) => {
  update({ open: !store.open });
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
  // find the id of the pokemon in the array
  const index = store.filtered.indexOf(id);
  update({
    filtered: [
      ...store.filtered.slice(0, index),
      ...store.filtered.slice(index + 1),
    ],
  });
});

export const openMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', true);
export const closeMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', false);
export const setMenuState = (open) => EventHorizon.dispatch('TRIGGER_OPEN_MENU', open);
export const toggleMenu = () => EventHorizon.dispatch('TOGGLE_OPEN_MENU');
export const addPokemonToFilter = (id) => EventHorizon.dispatch('ADD_FILTER_POKEMON', id);
export const removePokemonToFilter = (id) => EventHorizon.dispatch('REMOVE_FILTER_POKEMON', id);
