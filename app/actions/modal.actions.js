import EventHorizon from 'react-native-event-horizon';
import fetchPokemon from '../fetch';

EventHorizon.createAction('modal', 'MODAL_VIEW_POKEMON', (store, pokemonId, update) => {
  update({
    open: true,
  });
});

export const viewPokemon = (region) => EventHorizon.dispatch('MODAL_VIEW_POKEMON', region);
