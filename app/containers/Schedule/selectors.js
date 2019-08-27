import { createSelector } from 'reselect/lib/index';
import initialState from 'containers/Schedule/reducer';

const selectEvents = state => state.schedule || initialState;

const makeSelectCurrentWeekEvents = () =>
  createSelector(
    selectEvents,
    currentWeekEventsState => currentWeekEventsState.currentWeekEvents,
  );

const makeSelectEvent = () =>
  createSelector(
    selectEvents,
    currentWeekEventsState => currentWeekEventsState.event,
  );

const makeSelectVCParts = () =>
  createSelector(
    selectEvents,
    currentWeekEventsState => currentWeekEventsState.VCParts,
  );
const makeSelectSelectedVCParts = () =>
  createSelector(
    selectEvents,
    currentWeekEventsState => currentWeekEventsState.selectedVCParts,
  );

export {
  makeSelectCurrentWeekEvents,
  makeSelectEvent,
  makeSelectVCParts,
  makeSelectSelectedVCParts,
};
