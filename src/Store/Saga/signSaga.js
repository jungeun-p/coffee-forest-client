import { takeEvery, call, put } from 'redux-saga/effects';
import { actions, Types } from '../user';
import { actions as tokenActions } from '../token';
// import { actions as scheduleActions } from '../schedule';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
// import Cookies from 'universal-cookie';
// import { API_HOST } from "../Lib/constant";

function signApi(data) {
  return axios
    .post(`${LOCAL_HOST}sign-up`, data)
    .then(response => {
      const message = 'Valid';
      return {
        message
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      return { errorMessage };
    });
  // return axios.post(`${API_HOST}users`, user, {
  //   withCredentials: true,
  // });
}

function loginApi(data) {
  return axios
    .post(`${LOCAL_HOST}sign-in`, data)
    .then(response => {
      const { userTokenInfo, ...rest } = response.data;
      const userData = rest;

      // 요청하는 콜마다 헤더에 accessToken 담아서 전달
      axios.defaults.headers.common['Authorization'] =
        userTokenInfo.accessToken;
      return {
        userData,
        userTokenInfo
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      return { errorMessage };
    });
}

function* sign({ data }) {
  const { message, errorMessage } = yield call(signApi, data);
  if (message) {
    yield put(actions.signSuccess(message));
  } else {
    yield put(actions.signFail(errorMessage));
  }
}

function* login({ data }) {
  const { userData, userTokenInfo, errorMessage } = yield call(loginApi, data);
  if (userData) {
    yield put(actions.loginSuccess(userData));
    yield put(tokenActions.tokenInfo(userTokenInfo));
    // yield put(scheduleActions.scheduleInfo(userData));
  } else if (errorMessage) {
    yield put(actions.loginFail(errorMessage));
  }
}

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, sign);
  yield takeEvery(Types.LoginRequest, login);
}
