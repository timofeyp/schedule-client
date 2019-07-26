import {
  call,
  put,
  takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import { fetchCurrentWeekEventsRoutine } from 'containers/Schedule/constants';
import axios from 'utils/axios';

function* fetchCurrentWeekEvents() {
  const res = yield call(axios.get, '/api/events/get-week');
  yield put({ type: fetchCurrentWeekEventsRoutine.SUCCESS, payload: res.data });
}

export default function* defaultSaga() {
  yield takeLatest(
    fetchCurrentWeekEventsRoutine.TRIGGER,
    fetchCurrentWeekEvents,
  );
}
