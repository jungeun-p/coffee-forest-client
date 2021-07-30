import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { Types } from '../admin';
import { actions } from '../admin';

function callApplicantDetailApi(index) {
  return axios
    .get(`${LOCAL_HOST}company-applicant/${index}`)
    .then(response => {
      const dataDetail = response.data;
      return {
        dataDetail
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

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
      return {
        errorMessage
      };
    });
}

function* detail({ index }) {
  const { dataDetail, errorMessage } = yield call(
    callApplicantDetailApi,
    index
  );
  if (dataDetail) {
    yield put(actions.ApplicantDetailSuccess(dataDetail));
  }
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
  yield takeEvery(Types.ApplicantDetail, detail);
}
