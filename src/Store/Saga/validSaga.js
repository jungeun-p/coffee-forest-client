import { takeEvery, call, put } from 'redux-saga/effects';
import { actions, Types } from '../user';
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

// function validEmailApi(email) {
//   return axios.get(`${LOCAL_HOST}users/duplication`, { params: { email } });
// }

function* valid({ input }) {
  const { message } = yield call(validNumberApi, input);
  if (message === 'Available') {
    yield put(actions.validateSuccess(message));
  } else {
    console.log(message);
    yield put(actions.validateFail(message));
  }
}

export default function* watchValid() {
  yield takeEvery(Types.ValidateNumber, valid);
}
