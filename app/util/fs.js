import { AsyncStorage } from 'react-native';
import { addInitialFiltered } from '../actions/menu.actions';

const convertOrMake = (data) => data && JSON.parse(data) || [];
const save = (data) => AsyncStorage.setItem('filtered', JSON.stringify(data));

export const savePokemonFilter = (id) => AsyncStorage.getItem('filtered')
  .then(convertOrMake)
  .then((data) => [...data, id])
  .then(save);

export const removePokemonFilter = (id) => AsyncStorage.getItem('filtered')
    .then(convertOrMake)
    .then((data) => data.filter(o => o !== id))
    .then(save);

export const loadLocalData = () => AsyncStorage.getItem('filtered')
  .then(convertOrMake)
  .then(addInitialFiltered);
