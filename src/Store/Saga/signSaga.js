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

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, sign);
}
