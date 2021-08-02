import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../employee';

function callListapi(index) {
  return axios
    .post(`${LOCAL_HOST}work-applicant/list`, index)
    .then(response => {
      const requestList = response.data;
      return {
        requestList
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function* list({ index }) {
  const { requestList, errorMessage } = yield call(callListapi, index);
  if (requestList) {
    yield put(actions.requestListSuccess(requestList));
  } else {
    yield put(actions.requestListFail(errorMessage));
  }
}

export default function* requestEmployee() {
  yield takeEvery(Types.RequestList, list);
}
