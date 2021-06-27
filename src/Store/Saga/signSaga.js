import { takeEvery, call, put, take } from 'redux-saga/effects';
import { actions, Types } from '../user';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
// import { API_HOST } from "../Lib/constant";

function signApi(data) {
  return axios
    .post(`${LOCAL_HOST}users`, data)
    .then(response => {
      const userIndex = response.data.userIndex;
      return {
        userIndex
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
  // return axios.post(`${API_HOST}users`, user, {
  //   withCredentials: true,
  // });
}

function loginApi(data) {
  return axios
    .post(`${LOCAL_HOST}users/sign-in`, data)
    .then(response => {
      const companyIndex = response.data.companyIndex;
      const userIndex = response.data.userIndex;
      const userInfo = {
        companyIndex: companyIndex,
        userIndex: userIndex
      };
      return {
        userInfo
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* sign({ data }) {
  const { userIndex, errorMessage } = yield call(signApi, data);
  if (userIndex) {
    yield put(actions.signSuccess(userIndex));
  } else {
    yield put(actions.signFail(errorMessage));
  }
}

function* login({ data }) {
  const { userInfo, errorMessage } = yield call(loginApi, data);
  if (userInfo) {
    yield put(actions.loginSuccess(userInfo));
  } else {
    yield put(actions.loginFail(errorMessage));
  }
}

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, sign);
  yield takeEvery(Types.LoginRequest, login);
}
