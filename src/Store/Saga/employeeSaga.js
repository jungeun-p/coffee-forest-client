import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../employee';

function employeeUpdateApi(employeeData) {
  return axios
    .patch(`${LOCAL_HOST}works`, employeeData)
    .then(response => {
      const employeeInfo = response.data;
      return {
        employeeInfo
      };
    })
    .catch(error => {
      const errorMessage = error.repsonse.data;
      return {
        errorMessage
      };
    });
}

function callEmployeeListApi(index) {
  return axios
    .post(`${LOCAL_HOST}users`, index)
    .then(response => {
      const employeeList = response.data;
      return { employeeList };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function callAcceptApi(indexData) {
  return axios
    .post(`${LOCAL_HOST}work`, indexData)
    .then(response => {
      const status = response.data;
      return {
        status
      };
    })
    .catch(error => {
      return {
        error
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

function* update({ employeeData }) {
  const { employeeInfo } = yield call(employeeUpdateApi, employeeData);
  if (employeeInfo) {
    yield put(actions.updateEmployeeSuccess(employeeInfo));
  }
}

function* listEmployee({ index }) {
  const { employeeList } = yield call(callEmployeeListApi, index);
  if (employeeList) {
    yield put(actions.listEmployeeSuccess(employeeList));
  }
}

function* accept({ indexData }) {
  const { status, errorStatus } = yield call(callAcceptApi, indexData);
  if (status === '') {
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
  yield takeEvery(Types.ListEmployee, listEmployee);
  yield takeEvery(Types.UpdateEmployee, update);
}
