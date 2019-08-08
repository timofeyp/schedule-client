import { fetchCurrentWeekEventsRoutine, fetchEventRoutine, eraseEventRoutine } from 'containers/Schedule/constants';
import produce from 'immer/dist/immer';

export const initialState = {
  currentWeekEvents: [],
  event: {},
};

/* eslint-disable default-case, no-param-reassign */
const eventsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case fetchCurrentWeekEventsRoutine.SUCCESS:
        draft.currentWeekEvents = action.payload;
        break;
      case fetchEventRoutine.SUCCESS:
        draft.event = action.payload;
        break;
      case eraseEventRoutine.SUCCESS:
        draft.event = {};
        break;
    }
  });

export default eventsReducer;
