import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { Types } from '../admin';
import { actions } from '../admin';

function callApplicantApi({ accessToken }) {
  return axios
    .get(`${LOCAL_HOST}company-applicant`, {
      headers: {
        Authorization: accessToken
      }
    })
    .then(response => {
      console.log(accessToken);
      const dataList = response.data;
      console.log(dataList);
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

function* list({ accessToken }) {
  const { dataList, errorMessage } = yield call(callApplicantApi, accessToken);
  if (dataList) {
    yield put(actions.applicationListSuccess(dataList));
  } else {
  }
}

export default function* watchAdmin() {
  yield takeEvery(Types.ApplicantList, list);
}
