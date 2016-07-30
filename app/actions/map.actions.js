import EventHorizon from 'react-native-event-horizon';

EventHorizon.createAction('map', 'SET_MAP_LOADING', (store, data, update) => {
  update({
    loading: true,
  });
});

EventHorizon.createAction('map', 'TOGGLE_MAP_TRACKING', (store, data, update) => {
  update({
    track: !store.track,
  });
});

EventHorizon.createAction('map', 'UPDATE_MAP_POKEMON', (store, pokemon, update) => {
  update({
    pokemon,
    loading: false,
  });
});

EventHorizon.createAction('map', 'REMOVE_MAP_POKEMON', (store, index, update) => {
  update({
    pokemon: [
      ...store.pokemon.slice(0, index),
      ...store.pokemon.slice(index + 1),
    ],
  });
});

export const setLoading = () => EventHorizon.dispatch('SET_MAP_LOADING');
export const toggleNavigation = () => EventHorizon.dispatch('TOGGLE_MAP_TRACKING');
export const updatePokemon = (pokemon) => EventHorizon.dispatch('UPDATE_MAP_POKEMON', pokemon);
export const removePokemon = (index) => EventHorizon.dispatch('REMOVE_MAP_POKEMON', index);
