import EventHorizon from 'react-native-event-horizon';
import defaultStore from '../stores/timer.store';

// create a timer variable so we can set and reset it
let timer = null;

export const startTimer = () => EventHorizon.dispatch('TIMER_START');
export const resetTimer = () => EventHorizon.dispatch('TIMER_RESET');
export const decrementTimer = () => EventHorizon.dispatch('TIMER_DECREMENT');

EventHorizon.createAction('timer', 'TIMER_RESET', (store, data, update) => {
  update(defaultStore);
});

EventHorizon.createAction('timer', 'TIMER_START', (store, data, update) => {
  update({
    time: 30,
  });
  // set the timer to an interval of 1 second to decrement the store
  timer = setInterval(() => decrementTimer(), 1000);
});

EventHorizon.createAction('timer', 'TIMER_DECREMENT', (store, data, update) => {
  if (store.time > 0) {
    update({
      time: store.time - 1,
    });
  } else if (timer) {
    // clear the interval if the value is 0
    clearInterval(timer);
  }
});
