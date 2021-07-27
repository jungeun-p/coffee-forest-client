import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { Types } from '../admin';
import { actions } from '../admin';

function callApplicantApi() {
  return axios
    .get(`${LOCAL_HOST}company-applicant`)
    .then(response => {
      const dataList = response.data;
      return {
        dataList
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      console.log(errorMessage);
      return {
        errorMessage
      };
    });
}

function* list() {
  const { dataList, errorMessage } = yield call(callApplicantApi);
  if (dataList) {
    yield put(actions.applicationListSuccess(dataList));
  } else {
  }
}

export default function* watchAdmin() {
  yield takeEvery(Types.ApplicantList, list);
}
