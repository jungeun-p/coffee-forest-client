import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../schedule';

function scheduleMonthlyApi(index) {
  return axios
    .post(`${LOCAL_HOST}schedule/month`, index)
    .then(response => {
      const scheduleMonthly = response.data;
      return {
        scheduleMonthly
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function scheduleApi(index) {
  return axios
    .post(`${LOCAL_HOST}schedule/week`, index)
    .then(response => {
      const scheduleData = response.data;
      return {
        scheduleData
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* monthly({ index }) {
  const { scheduleMonthly } = yield call(scheduleMonthlyApi, index);
  if (scheduleMonthly) {
    yield put(actions.scheduleMonthlySuccess(scheduleMonthly));
  }
}

function* data({ index }) {
  const { scheduleData, errorMessage } = yield call(scheduleApi, index);
  if (scheduleData) {
    yield put(actions.ScheduleInfoSuccess(scheduleData));
  } else {
    yield put(actions.scheduleInfoFail(errorMessage));
  }
}

export default function* watchSchedule() {
  yield takeEvery(Types.ScheduleInfoRequest, data);
  yield takeEvery(Types.ScheduleMonthlyRequest, monthly);
}
