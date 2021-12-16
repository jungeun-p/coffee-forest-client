import { takeEvery, call, put } from 'redux-saga/effects';
import { actions, Types } from '../user';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
import Cookies from 'universal-cookie/es6';
import { setAccessToken } from '../../Hooks/auth';
import { callApi } from '../../util/api';

const cookies = new Cookies();

// function signApi(data) {
//   return axios
//     .post(`${LOCAL_HOST}sign-up`, data)
//     .then(response => {
//       const message = 'Valid';
//       return {
//         message
//       };
//     })
//     .catch(error => {
//       const errorMessage = error.response.data.message;
//       return { errorMessage };
//     });
// }

function loginApi(data) {
  return axios
    .post(`${LOCAL_HOST}sign-in`, data)
    .then(response => {
      const { userTokenInfo, ...rest } = response.data;
      const userData = rest;
      // refreshToken 쿠키에 저장
      cookies.set('refreshToken', userTokenInfo.refreshToken, {
        sameSite: 'strict'
      });
      // Index Info 로컬에 저장
      localStorage.setItem('userIndex', userTokenInfo.userIndex);
      localStorage.setItem('companyIndex', userData.companyIndex);
      setAccessToken(userTokenInfo.accessToken);
      return {
        userData
      };
    })
    .catch(error => {
      const errorMessage = error.response.data.message;
      return { errorMessage };
    });
}

// function* signOut({ data }) {
//   const { reresultMessage, errorMessage } = yield call(callApi, {
//     url: 'sign-out',
//     method: 'delete',
//     data: data
//   });
//   if (reresultMessage) {
//     console.log(reresultMessage);
//     const message = 'LogoutSuccess';
//     yield put(actions.logoutSuccess(message));
//   }
// }

function* signUp({ data }) {
  // const { message, errorMessage } = yield call(signApi, data);
  const { reresultMessage, errorMessage } = yield call(callApi, {
    url: 'sign-up',
    method: 'post',
    data: data
  });
  if (reresultMessage) {
    const message = 'Valid';
    yield put(actions.signSuccess(message));
  } else {
    yield put(actions.signFail(errorMessage));
  }
}

function* signIn({ data }) {
  const { userData, errorMessage } = yield call(loginApi, data);
  if (userData) {
    yield put(actions.loginSuccess(userData));
  } else if (errorMessage) {
    yield put(actions.loginFail(errorMessage));
  }
}

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, signUp);
  yield takeEvery(Types.LoginRequest, signIn);
  // yield takeEvery(Types.LogoutRequest, signOut);
}
