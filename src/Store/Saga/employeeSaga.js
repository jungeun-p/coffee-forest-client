import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../employee';

function callAcceptApi(indexData) {
  return axios
    .post(`${LOCAL_HOST}work`, indexData)
    .then(response => {
      const status = response.data.status;
      console.log(status);
      return {
        status
      };
    })
    .catch(error => {
      const errorStatus = error.response.data.status;
      console.log(errorStatus);
      return {
        errorStatus
      };
    });
}

function callListApi(index) {
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

function* accept({ indexData }) {
  const { status, errorStatus } = yield call(callAcceptApi, indexData);
  if (status === 200) {
    yield put(actions.acceptSuccess(status));
  } else {
    yield put(actions.AcceptFail(errorStatus));
  }
}

function* list({ index }) {
  const { requestList, errorMessage } = yield call(callListApi, index);
  if (requestList) {
    yield put(actions.requestListSuccess(requestList));
  } else {
    yield put(actions.requestListFail(errorMessage));
  }
}

export default function* requestEmployee() {
  yield takeEvery(Types.RequestList, list);
  yield takeEvery(Types.AcceptEmployee, accept);
}
