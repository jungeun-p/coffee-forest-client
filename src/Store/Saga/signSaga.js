import { takeEvery, call, put, take } from 'redux-saga/effects';
import { actions, Types } from '../user';
import { actions as scheduleActions } from '../schedule';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
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
      const { accessToken } = response.data.userTokenInfo;
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
      const userData = response.data;
      return {
        userData
      };
    })
    .catch(error => {
      const errorMessage = error.response.data;
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
  const { userData, errorMessage } = yield call(loginApi, data);
  if (userData) {
    yield put(actions.loginSuccess(userData));
    yield put(scheduleActions.scheduleInfo(userData));
  } else {
    yield put(actions.loginFail(errorMessage));
  }
}

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, sign);
  yield takeEvery(Types.LoginRequest, login);
}
