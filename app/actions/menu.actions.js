import EventHorizon from 'react-native-event-horizon';

EventHorizon.createAction('menu', 'TRIGGER_OPEN_MENU', (store, open, update) => {
  if (store.open !== open) {
    update({ open });
  }
});

EventHorizon.createAction('menu', 'TOGGLE_OPEN_MENU', (store, data, update) => {
  update({ open: !store.open });
});

export const openMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', true);
export const closeMenu = () => EventHorizon.dispatch('TRIGGER_OPEN_MENU', false);
export const setMenuState = (open) => EventHorizon.dispatch('TRIGGER_OPEN_MENU', open);
export const toggleMenu = () => EventHorizon.dispatch('TOGGLE_OPEN_MENU');
