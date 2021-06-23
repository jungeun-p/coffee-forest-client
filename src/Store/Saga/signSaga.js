import { takeEvery, call, put, take } from 'redux-saga/effects';
import { Types } from '../user';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
// import { API_HOST } from "../Lib/constant";

function signApi(data) {
  return axios.post(`${LOCAL_HOST}users`, data);
  // .then(response => {
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   console.log(error.response.data);
  // });

  // return axios.post(`${API_HOST}users`, user, {
  //   withCredentials: true,
  // });
}

function* sign({ data }) {
  try {
    const result = yield call(signApi, data);
    yield put(Types.SignSuccess, result.data);
  } catch (e) {
    yield put(Types.SignFail, e);
  }
}

function validNumberApi(number) {
  return axios
    .get(`${LOCAL_HOST}company/duplication`, number)
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

function* valid({ number, email }) {
  try {
    const fixnumber = yield call(validNumberApi, number);
    yield put(Types.ValidateSuccess, fixnumber.data);
  } catch (error) {
    yield put(Types.ValidateFail, error.response.data);
  }
}

export default function* watchSign() {
  // yield take(Types.SignRequest, sign);
  yield takeEvery(Types.ValidateNumber, valid);
}
