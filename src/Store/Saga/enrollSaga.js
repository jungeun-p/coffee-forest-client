import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../enroll';

function enrollEmployeeApi(data) {
  return axios
    .post(`${LOCAL_HOST}work-applicant`, data)
    .then(response => {
      const enrollEmployee = response.data;
      console.log(enrollEmployee);
      return {
        enrollEmployee
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      console.log(error.response.data);
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
      const enrollCompany = response.data;
      return {
        enrollCompany
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
  const { enrollEmployee } = yield call(enrollEmployeeApi, data);
  if (enrollEmployee) {
    yield put(actions.enrollSuccessEmployee(enrollEmployee));
  }
}

function* list() {
  const { companyList } = yield call(listApi);
  if (companyList) {
    yield put(actions.compnayListSuccess(companyList));
  }
}

function* enrollOffice({ data }) {
  const { enrollCompany, errorMessage } = yield call(enrollApi, data);
  if (errorMessage === 'Already Exists') {
    yield put(actions.enrollFail(errorMessage));
  } else {
    yield put(actions.enrollSuccessCompany(enrollCompany));
  }
}
export default function* watchSign() {
  yield takeEvery(Types.EnrollRequestCompany, enrollOffice);
  yield takeEvery(Types.EnrollCompanyList, list);
  yield takeEvery(Types.EnrollRequestEmployee, enrollEmployee);
}
