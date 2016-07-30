import EventHorizon from 'react-native-event-horizon';
import { updatePokemon, setLoading } from './actions/map.actions';
import { startTimer } from './actions/timer.actions';

const parseData = (res) => (
  res._bodyInit.type === 'text/html; charset=utf-8' && { pokemon: [] } || res.json()
);

const config = {
  method: 'GET',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
};

const fetchData = ({ jobId, latitude, longitude }) => {
  fetch(`https://pokevision.com/map/data/${latitude}/${longitude}/${jobId}`, config)
    .then(parseData)
    .then((res) => {
      if (res.jobStatus === 'in_progress') {
        setTimeout(() => fetchData({ jobId, latitude, longitude }), 2000);
      } else if (res.jobStatus === 'unknown') {
        setTimeout(() => fetchData({ jobId, latitude, longitude }), 30000);
      } else {
        updatePokemon(res.pokemon);
      }
    })
    .catch(e => console.log(e));
};

export default () => {
  const { latitude, longitude } = EventHorizon.subscribe('location');
  if (latitude && longitude) {
    setLoading();
    startTimer();
    fetch(`https://pokevision.com/map/scan/${latitude}/${longitude}`, config)
      .then(parseData)
      .then(({ jobId }) => setTimeout(() => fetchData({ jobId, latitude, longitude }), 2000))
      .catch(e => console.log(e));
  }
};
