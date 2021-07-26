import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../enroll';

function enrollApi(data) {
  return axios
    .post(`${LOCAL_HOST}company-applicant`, data)
    .then(response => {
      const office = response.data;
      console.log(office);
      return {
        office
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      console.log(`error:${errorMessage}`);
      return {
        errorMessage
      };
    });
}

function* enroll({ data }) {
  const { office, errorMessage } = yield call(enrollApi, data);
  if (errorMessage === 'Already Exists') {
    yield put(actions.enrollFail(errorMessage));
  } else {
    yield put(actions.enrollSuccess(office));
  }
}
export default function* watchSign() {
  yield takeEvery(Types.EnrollRequest, enroll);
}
