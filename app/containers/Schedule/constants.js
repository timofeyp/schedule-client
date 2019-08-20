import createAction from 'utils/createAction';
export const fetchCurrentWeekEventsRoutine = createAction(
  'FETCH_CURRNET_WEEK_EVENTS',
  'schedule',
);
export const fetchVCPartsRoutine = createAction('FETCH_VC_PARTS', 'schedule');
export const fetchSelectedVCPartsRoutine = createAction(
  'FETCH_SELECTED_VC_PARTS',
  'schedule',
);
export const fetchEventRoutine = createAction('FETCH__EVENT', 'schedule');
export const eraseEventRoutine = createAction('ERASE__EVENT', 'schedule');
