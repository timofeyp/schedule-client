import { fetchCurrentWeekEventsRoutine } from 'containers/Schedule/constants';
import produce from 'immer/dist/immer';

export const initialState = {
  currentWeekEvents: [],
};

/* eslint-disable default-case, no-param-reassign */
const eventsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case fetchCurrentWeekEventsRoutine.SUCCESS:
        draft.currentWeekEvents = action.payload;
        break;
    }
  });

export default eventsReducer;
