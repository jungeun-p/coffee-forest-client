import { call, put, all, takeEvery } from 'redux-saga/effects';
import { actions, Types } from '../schedule';
import { actions as authActions } from '../auth';
import { callApi } from '../../util/api.js';

// 일정 추가 
function* schedule({schedule}){
  const {data, status} = yield call(callApi, {
    url: 'schedule',
    method:'post',
    data:schedule
  });
  if(data){
    yield put(actions.scheduleStatus(status));
  } else {
    yield put(actions.scheduleStatus(status));
  }
}

// 월간 일정 
function* monthly({ index }) {
  const { data, status } = yield call(callApi, {
    url: 'schedule/month',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.scheduleMonthlySuccess(data));
    yield put(authActions.getAccessSuccess());
  } else {
    yield put(actions.scheduleStatus(status));
    yield put(authActions.getAccessFail(status));
  }
}

// 주간 일정
function* weekly({ index }) {
  const { data, status } = yield call(callApi, {
    url: 'schedule/week',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.scheduleWeeklySuccess(data));
    yield put(authActions.getAccessSuccess());
  } else {
    yield put(actions.scheduleStatus(status));
    yield put(authActions.getAccessFail(status));
  }
}

export default function* watchSchedule() {
  yield all([
    takeEvery(Types.ScheduleWeeklyRequest, weekly),
    takeEvery(Types.ScheduleMonthlyRequest, monthly),
    takeEvery(Types.AddSchedule, schedule),
  ]);
}
