import { takeLatest, call, put } from "redux-saga/effects";
import { Types } from "../Store/user";
import axios from "axios";
// import { API_HOST } from "../Lib/constant";

function signApi(user) {
  return axios
    .post(`/api/users`, user)
    .then((res) => {
      console.log(res.data);
    })
    .catch((e) => {
      console.log(e);
    });
  // return axios.post(`${API_HOST}users`, user, {
  //   withCredentials: true,
  // });
}

function* sign({ user }) {
  try {
    const result = yield call(signApi, user);
    yield put(Types.SignSuccess, result.data);
  } catch (e) {
    yield put(Types.SignFail, e);
  }
}

export default function* watchSign() {
  yield takeLatest(Types.SignRequest, sign);
}
