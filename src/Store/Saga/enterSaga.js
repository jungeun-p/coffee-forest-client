import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../schedule';

function enterApi(index) {
  return axios
    .post(`${LOCAL_HOST}attendance`, index)
    .then(response => {
      const enterTime = response.data;
      console.log(enterTime);
      return {
        enterTime
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* enter({ index }) {
  const { enterTime } = yield call(enterApi, index);
  if (enterTime) {
    yield put(actions.scheduleEnterSuccess(enterTime));
  }
}

export default function* watchWorkplan() {
  yield takeEvery(Types.ScheduleEnter, enter);
}
