import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { Types } from '../admin';
import { actions } from '../admin';

function callAcceptApi(acceptForm) {
  return axios
    .post(`${LOCAL_HOST}company/accept`, acceptForm)
    .then(response => {
      const acceptRes = response.data;
      return {
        acceptRes
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

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

function* accept({ acceptForm }) {
  const { acceptRes, errorMessage } = yield call(callAcceptApi, acceptForm);
  if (acceptRes) {
    yield put(actions.accpetSuccess(acceptRes));
  }
}

function* detail({ index }) {
  const { dataDetail, errorMessage } = yield call(
    callApplicantDetailApi,
    index
  );
  if (dataDetail) {
    yield put(actions.applicantDetailSuccess(dataDetail));
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
  yield takeEvery(Types.AcceptCompany, accept);
}
