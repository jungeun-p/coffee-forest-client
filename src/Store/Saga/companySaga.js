import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../company';

function settingApi(companySetting) {
  return axios
    .put(`${LOCAL_HOST}company-config`, companySetting)
    .then(response => {
      const companyEnvironment = response.data;
      return {
        companyEnvironment
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return {
        errorMessage
      };
    });
}

function* form({ companySetting }) {
  const { companyEnvironment } = yield call(settingApi, companySetting);
  if (companyEnvironment) {
    yield put(actions.updateSuccess(companyEnvironment));
  }
}

export default function* setting() {
  yield takeEvery(Types.UpdateCompany, form);
}
