import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../schedule';

function endApi(index) {
  return axios
    .patch(`${LOCAL_HOST}attendance`, index)
    .then(response => {
      const attendance = response.data;
      console.log(attendance);
      return { attendance };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function enterApi(index) {
  return axios
    .post(`${LOCAL_HOST}attendance`, index)
    .then(response => {
      const attendance = response.data;
      console.log(attendance);
      return {
        attendance
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* end({ index }) {
  const { attendance } = yield call(endApi, index);
  if (attendance) {
    yield put(actions.scheduleEndSuccess(attendance));
  }
}

function* enter({ index }) {
  const { attendance } = yield call(enterApi, index);
  if (attendance) {
    yield put(actions.scheduleEnterSuccess(attendance));
  }
}

export default function* watchWorkplan() {
  yield takeEvery(Types.ScheduleEnter, enter);
  yield takeEvery(Types.ScheduleEnd, end);
}
