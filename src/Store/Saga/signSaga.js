import { takeEvery, call, put, take } from 'redux-saga/effects';
import { actions, Types } from '../user';
import axios from 'axios';
import { LOCAL_HOST } from '../../Lib/constant';
// import { API_HOST } from "../Lib/constant";

function signApi(data) {
  return axios
    .post(`${LOCAL_HOST}users`, data)
    .then(response => {
      const userIndex = response.data;
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

function* sign({ data }) {
  const { userIndex, errorMessage } = yield call(signApi, data);
  if (userIndex) {
    yield put(actions.signSuccess(userIndex));
  } else {
    yield put(actions.signFail(errorMessage));
  }
}

export default function* watchSign() {
  yield takeEvery(Types.SignRequest, sign);
}
