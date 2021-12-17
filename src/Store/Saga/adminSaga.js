import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { callApi } from '../../util/api';
import { Types } from '../admin';
import { actions } from '../admin';
import { actions as authActions } from '../auth';

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

// function callApplicantApi() {
//   return axios
//     .get(`${LOCAL_HOST}company-applicant`)
//     .then(response => {
//       const dataList = response.data;
//       return {
//         dataList
//       };
//     })
//     .catch(error => {
//       const errorMessage = error.response.data;
//       return {
//         errorMessage
//       };
//     });
// }

function* accept({ acceptForm }) {
  const { acceptRes } = yield call(callAcceptApi, acceptForm);
  if (acceptRes) {
    yield put(actions.accpetSuccess(acceptRes));
  }
}

function* detail({ index }) {
  const { data, status } = yield call(callApi, {
    url: `company-applicant/${index}`,
    method: 'get'
  });
  const dataDetail = data;
  if (dataDetail) {
    yield put(actions.applicantDetailSuccess(dataDetail));
    yield put(authActions.getAccessSuccess());
  } else {
    yield put(authActions.getAccessFail(status));
  }
}

function* list() {
  const { data, status } = yield call(callApi, {
    url: 'company-applicant',
    method: 'get'
  });
  if (data) {
    yield put(actions.applicationListSuccess(data));
    yield put(authActions.getAccessSuccess());
  } else {
    yield put(authActions.getAccessFail(status));
  }
}

export default function* watchAdmin() {
  yield takeEvery(Types.ApplicantList, list);
  yield takeEvery(Types.ApplicantDetail, detail);
  yield takeEvery(Types.AcceptCompany, accept);
}
