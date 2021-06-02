import { takeLatest, call, put } from "redux-saga/effects";
import { Types } from "../Store/user";
import axios from "axios";
import { API_HOST } from "../Lib/constant";

function signApi(user) {
  return axios.post(
    `${API_HOST}users`,
    {
      userSaveRequest: {
        email: user.email,
        password: user.password,
        position: "ADMIN",
        name: user.name,
        phone: user.phone,
        address: user.address,
      },
      companySaveRequest: {
        name: user.companyName,
        address: user.companyAddress,
        businessNumber: user.businessNumber,
      },
    },
    {
      withCredentials: true,
    }
  );
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
