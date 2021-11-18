import { call, put, all, takeLeading, takeEvery } from 'redux-saga/effects';
import { actions, Types } from '../schedule';
import { callApi } from '../../util/api.js';

function* monthly({ index }) {
  const { data, status } = yield call(callApi, {
    url: 'schedule/month',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.scheduleMonthlySuccess(data));
  } else {
    yield put(actions.scheduleMonthlyFail(status));
  }
}

function* weekly({ index }) {
  const { data, status } = yield call(callApi, {
    url: 'schedule/week',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.scheduleWeeklySuccess(data));
  } else {
    yield put(actions.scheduleWeeklyFail(status));
  }
}

export default function* watchSchedule() {
  yield all([
    takeEvery(Types.ScheduleWeeklyRequest, weekly),
    takeEvery(Types.ScheduleMonthlyRequest, monthly)
  ]);
}
