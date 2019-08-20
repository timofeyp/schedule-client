import {
  fetchCurrentWeekEventsRoutine,
  fetchEventRoutine,
  eraseEventRoutine,
  fetchVCPartsRoutine,
  fetchSelectedVCPartsRoutine,
} from 'containers/Schedule/constants';
import produce from 'immer/dist/immer';

export const initialState = {
  currentWeekEvents: [],
  event: {},
  VCParts: [],
  selectedVCParts: [],
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
      case fetchVCPartsRoutine.SUCCESS:
        draft.VCParts = action.payload;
        break;
      case fetchSelectedVCPartsRoutine.SUCCESS:
        draft.selectedVCParts = action.payload;
        break;
    }
  });

export default eventsReducer;
