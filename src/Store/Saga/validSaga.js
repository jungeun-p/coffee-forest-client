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
      const errorMessage = error.response.data.message;
      return {
        errorMessage
      };
    });
}

function validEmailApi(inputEmail) {
  return axios
    .get(`${LOCAL_HOST}users/email`, inputEmail)
    .then(response => {
      const message = response.data;
      return {
        message
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

function* number({ input }) {
  const { message, errorMessage } = yield call(validNumberApi, input);
  if (message === 'Available') {
    yield put(actions.validateSuccessNumber(message));
  } else {
    yield put(actions.validateSuccessNumber(errorMessage));
  }
}

function* email({ inputEmail }) {
  const { message, errorMessage } = yield call(validEmailApi, inputEmail);
  if (message === 'Available') {
    yield put(actions.validateSuccessEmail(message));
  } else if (message === 'Duplicated') {
    yield put(actions.validateSuccessEmail(message));
  }
}

export default function* watchValid() {
  yield takeEvery(Types.ValidateEmail, email);
  yield takeEvery(Types.ValidateNumber, number);
}
