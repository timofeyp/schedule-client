import createAction from 'utils/createAction';
export const fetchCurrentWeekEventsRoutine = createAction(
  'FETCH_CURRNET_WEEK_EVENTS',
  'schedule',
);
export const fetchEventRoutine = createAction('FETCH__EVENT', 'schedule');
export const eraseEventRoutine = createAction('ERASE__EVENT', 'schedule');
