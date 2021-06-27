import { takeEvery, call, put } from 'redux-saga/effects';
import { actions, Types } from '../validation';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';

function validNumberApi(input) {
  return axios
    .get(`${LOCAL_HOST}company/duplication`, input)
    .then(response => {
      const message = response.data;
      return {
        message
      };
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

function validEmailApi(inputEmail) {
  return axios
    .get(`${LOCAL_HOST}users/duplication`, inputEmail)
    .then(response => {
      const message = response.data;
      return {
        message
      };
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

function* number({ input }) {
  const { message } = yield call(validNumberApi, input);
  if (message === 'Available') {
    yield put(actions.validateSuccessNumber(message));
  } else {
    yield put(actions.validateFail(message));
  }
}

function* email({ inputEmail }) {
  const { message } = yield call(validEmailApi, inputEmail);
  if (message === 'Available') {
    yield put(actions.validateSuccessEmail(message));
  } else {
    yield put(actions.validateFail(message));
  }
}

export default function* watchValid() {
  yield takeEvery(Types.ValidateEmail, email);
  yield takeEvery(Types.ValidateNumber, number);
}
