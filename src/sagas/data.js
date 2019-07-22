import {
  put, fork, takeLatest, call,
} from 'redux-saga/effects';
import { GET_DATA_SAGA } from '../actions/types';
import api from '../api';
import { fetchDataSuccess, fetchDataError } from '../actions/dataActions';

export function* getData() {
  try {
    const data = yield call(api.json.getData);

    console.log(data);

    yield put(fetchDataSuccess(data));
  } catch (err) {
    yield put(fetchDataError(err));
  }
}

export function* watchData() {
  yield takeLatest(GET_DATA_SAGA, getData);
}

export default function* () {
  yield fork(watchData);
}
