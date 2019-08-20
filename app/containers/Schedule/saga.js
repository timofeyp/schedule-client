import {
  call,
  put,
  takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  fetchCurrentWeekEventsRoutine,
  fetchEventRoutine,
  fetchVCPartsRoutine,
  fetchSelectedVCPartsRoutine,
} from 'containers/Schedule/constants';
import axios from 'utils/axios';

function* fetchCurrentWeekEvents() {
  const res = yield call(axios.get, '/api/events/get-week');
  yield put({ type: fetchCurrentWeekEventsRoutine.SUCCESS, payload: res.data });
}

function* fetchVcParts() {
  const res = yield call(axios.get, '/api/events/get-vc-parts');
  yield put({ type: fetchVCPartsRoutine.SUCCESS, payload: res.data });
}

function* fetchSelectedVcParts() {
  const res = yield call(axios.get, '/api/events/get-selected-vc-parts');
  yield put({ type: fetchSelectedVCPartsRoutine.SUCCESS, payload: res.data });
}

function* fetchEvent({ payload }) {
  const res = yield call(axios.get, `/api/events/get-event-data/${payload.id}`);
  console.log(res.data);
  yield put({ type: fetchEventRoutine.SUCCESS, payload: res.data });
}

export default function* defaultSaga() {
  yield takeLatest(
    fetchCurrentWeekEventsRoutine.TRIGGER,
    fetchCurrentWeekEvents,
  );
  yield takeLatest(fetchEventRoutine.TRIGGER, fetchEvent);
  yield takeLatest(fetchVCPartsRoutine.TRIGGER, fetchVcParts);
  yield takeLatest(fetchSelectedVCPartsRoutine.TRIGGER, fetchSelectedVcParts);
}
