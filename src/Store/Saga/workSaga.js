import axios from 'axios';
import { call, takeEvery, put } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../work';

function listApi(workIndex) {
  return axios
    .post(`${LOCAL_HOST}schedule-applicant`, workIndex)
    .then(response => {
      const workList = response.data;
      return {
        workList
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function* list({ workIndex }) {
  const { workList } = yield call(listApi, workIndex);
  if (workList) {
    yield put(actions.workListSuccess(workList));
  }
}

export default function* watchWork() {
  yield takeEvery(Types.RequestWorkList, list);
}
