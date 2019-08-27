import {
  call,
  put,
  takeLatest,
} from 'redux-saga/dist/redux-saga-effects-npm-proxy.esm';
import {
  setAuthRoutine,
  fetchSessionRoutine,
} from 'containers/App/session/constants';
import axios from 'utils/axios';

function* fetchAuth({ payload }) {
  try {
    const res = yield call(axios.post, '/api/auth/login-ldap', payload);
    yield put({ type: setAuthRoutine.SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: setAuthRoutine.SUCCESS,
      payload: { username: 'Ошибка', password: ' ' },
    });
  }
}

function* fetchSession() {
  try {
    const res = yield call(axios.get, '/api/auth/session');
    yield put({ type: fetchSessionRoutine.SUCCESS, payload: res.data });
  } catch (err) {
    yield put({
      type: fetchSessionRoutine.SUCCESS,
      payload: undefined,
    });
  }
}

export default function* defaultSaga() {
  yield takeLatest(setAuthRoutine.TRIGGER, fetchAuth);
  yield takeLatest(fetchSessionRoutine.TRIGGER, fetchSession);
}
