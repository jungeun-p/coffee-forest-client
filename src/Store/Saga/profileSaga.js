import axios from 'axios';
import { call, put, takeEvery } from 'redux-saga/effects';
import { LOCAL_HOST } from '../../Lib/constant';
import { actions, Types } from '../user';

function editProfileApi(profileData) {
  return axios
    .patch(`${LOCAL_HOST}users`, profileData)
    .then(response => {
      const userProfile = response.data;
      return {
        userProfile
      };
    })
    .catch(error => {
      console.log(error.response.data);
      const errorMessage = error.response.data;
      return { errorMessage };
    });
}

function* edit({ profileData }) {
  const { userProfile } = yield call(editProfileApi, profileData);
  if (userProfile) {
    yield put(actions.editSuccess(userProfile));
  }
}

export default function* watchProfile() {
  yield takeEvery(Types.EditProfile, edit);
}
