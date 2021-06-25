import { takeEvery, call, put } from 'redux-saga/effects';
import { Types } from '../user';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';

function validNumberApi(input) {
  return axios
    .get(`${LOCAL_HOST}company/duplication`, input)
    .then(response => {
      if (response.data === 'Duplicated') {
        alert('중복된 사업자 번호입니다.');
      } else {
        alert('등록 가능한 사업자 번호입니다.');
      }
    })
    .catch(error => {
      console.log(error.response.data);
    });
}

// function validEmailApi(email) {
//   return axios.get(`${LOCAL_HOST}users/duplication`, { params: { email } });
// }

function* valid({ input }) {
  try {
    const fixnumber = yield call(validNumberApi, input);
    // yield put(Types.ValidateSuccess, fixnumber.data);
  } catch (error) {
    // yield put(Types.ValidateFail, error.response.data);
  }
}

export default function* watchValid() {
  yield takeEvery(Types.ValidateNumber, valid);
}
