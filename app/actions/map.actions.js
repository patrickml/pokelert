import EventHorizon from 'react-native-event-horizon';
import fetchPokemon from '../fetch';

EventHorizon.createAction('map', 'UPDATE_MAP_REGION', (store, region, update) => {
  if (region && region.latitude) {
    update({
      location: region,
    });
  }

  fetchPokemon(region || store.location);
});

EventHorizon.createAction('map', 'SET_MAP_LOADING', (store, data, update) => {
  update({
    loading: true,
  });
});

EventHorizon.createAction('map', 'UPDATE_MAP_POKEMON', (store, pokemon, update) => {
  console.log(pokemon);
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

export const updateRegion = (region) => EventHorizon.dispatch('UPDATE_MAP_REGION', region);
export const setLoading = () => EventHorizon.dispatch('SET_MAP_LOADING', {});
export const updatePokemon = (pokemon) => EventHorizon.dispatch('UPDATE_MAP_POKEMON', pokemon);
export const removePokemon = (index) => EventHorizon.dispatch('REMOVE_MAP_POKEMON', index);
