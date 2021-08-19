import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../schedule';

function endApi(index) {
  return axios
    .patch(`${LOCAL_HOST}attendance`, index)
    .then(response => {
      const end = response.data;
      return { end };
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
      const enter = response.data;
      return {
        enter
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* end({ index }) {
  const { end } = yield call(endApi, index);
  if (end) {
    yield put(actions.scheduleEndSuccess(end));
  }
}

function* enter({ index }) {
  const { enter } = yield call(enterApi, index);
  if (enter) {
    yield put(actions.scheduleEnterSuccess(enter));
  }
}

export default function* watchWorkplan() {
  yield takeEvery(Types.ScheduleEnter, enter);
  yield takeEvery(Types.ScheduleEnd, end);
}
