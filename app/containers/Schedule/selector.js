import { createSelector } from 'reselect/lib/index';
import initialState from 'containers/Schedule/reducer';

const selectEvents = state => state.schedule || initialState;

const makeSelectCurrentWeekEvents = () =>
  createSelector(
    selectEvents,
    currentWeekEventsState => currentWeekEventsState.currentWeekEvents,
  );

export { makeSelectCurrentWeekEvents };
