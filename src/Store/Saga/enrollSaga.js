import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../enroll';

function enrollEmployeeApi(data) {
  return axios
    .post(`${LOCAL_HOST}work-applicant`, data)
    .then(response => {
      const enrollData = response.data;
      return {
        enrollData
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      return {
        errorMessage
      };
    });
}

function listApi() {
  return axios
    .get(`${LOCAL_HOST}company`)
    .then(response => {
      const companyList = response.data;
      return {
        companyList
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function enrollApi(data) {
  return axios
    .post(`${LOCAL_HOST}company-applicant`, data)
    .then(response => {
      const enrollData = response.data;
      return {
        enrollData
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      return {
        errorMessage
      };
    });
}

function* enrollEmployee({ data }) {
  const { enrollData } = yield call(enrollEmployeeApi, data);
  if (enrollData) {
    yield put(actions.enrollSuccess(enrollData));
  }
}

function* list() {
  const { companyList } = yield call(listApi);
  if (companyList) {
    yield put(actions.compnayListSuccess(companyList));
  }
}

function* enrollOffice({ data }) {
  const { enrollData, errorMessage } = yield call(enrollApi, data);
  if (errorMessage === 'Already Exists') {
    yield put(actions.enrollFail(errorMessage));
  } else {
    yield put(actions.enrollSuccess(enrollData));
  }
}
export default function* watchSign() {
  yield takeEvery(Types.EnrollRequestCompany, enrollOffice);
  yield takeEvery(Types.EnrollCompanyList, list);
  yield takeEvery(Types.EnrollRequestEmployee, enrollEmployee);
}
