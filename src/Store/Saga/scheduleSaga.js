import axios from 'axios';
import { call, put, all, takeLeading } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import Cookies from 'universal-cookie/es6';
import { actions, Types } from '../schedule';
import { callApi } from '../../util/api.js';

// function scheduleMonthlyApi(index) {
//   return axios
//     .post(`${LOCAL_HOST}schedule/month`, index)
//     .then(response => {
//       const scheduleMonthly = response.data;
//       return {
//         scheduleMonthly
//       };
//     })
//     .catch(error => {
//       const errorMessage = error.response.data;
//       return {
//         errorMessage
//       };
//     });
// }

// function scheduleApi(index) {
//   return axios
//     .post(`${LOCAL_HOST}schedule/week`, index)
//     .then(response => {
//       const scheduleData = response.data;
//       return {
//         scheduleData
//       };
//     })
//     .catch(error => {
//       const errorMessage = error.response.data;
//       return { errorMessage };
//     });
// }

// function* monthly({ index }) {
//   const { scheduleMonthly } = yield call(scheduleMonthlyApi, index);
//   if (scheduleMonthly) {
//     yield put(actions.scheduleMonthlySuccess(scheduleMonthly));
//   }
// }

// function* data({ index }) {
//   const { scheduleData, errorMessage } = yield call(scheduleApi, index);
//   if (scheduleData) {
//     yield put(actions.ScheduleInfoSuccess(scheduleData));
//   } else {
//     yield put(actions.scheduleInfoFail(errorMessage));
//   }
// }

function* monthly({ index }) {
  const { data } = yield call(callApi, {
    url: 'schedule/month',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.scheduleMonthlySuccess(data));
  }
}

function* weekly({ index }) {
  const { data } = yield call(callApi, {
    url: 'schedule/week',
    method: 'post',
    data: index
  });
  if (data) {
    yield put(actions.ScheduleInfoSuccess(data));
  }
}

export default function* watchSchedule() {
  yield all([
    takeLeading(Types.ScheduleInfoRequest, weekly),
    takeLeading(Types.ScheduleMonthlyRequest, monthly)
  ]);
}
