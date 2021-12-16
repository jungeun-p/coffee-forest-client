import { createReducer } from '../Hooks/redux-helper';
// import { createReducer } from '@reduxjs/toolkit';

export const Types = {
  SignRequest: 'user/SignRequest',
  SignSuccess: 'user/SignSuccess',
  SignFail: 'user/SignFail',
  LoginRequest: 'user/LoginRequest',
  LoginSuccess: 'user/LoginSuccess',
  LoginFail: 'user/LoginFail',
  LogoutRequest: 'user/LogoutRequest',
  LogoutSuccess: ' user/LogoutSuccess',
  EditProfile: 'user/EditProfile',
  EditSuccess: 'user/EditSuccess',
  EditFail: 'user/EditFail',
  EditProfileImg: 'user/EditProfileImg',
  EditProfileImgSuccess: 'user/EditProfileImgSuccess'
};

export const actions = {
  // sign
  signRequest: data => ({ type: Types.SignRequest, data }),
  signSuccess: message => ({ type: Types.SignSuccess, message }),
  signFail: errorMessage => ({ type: Types.SignFail, errorMessage }),
  // login
  loginRequest: data => ({ type: Types.LoginRequest, data }),
  loginSuccess: userData => ({ type: Types.LoginSuccess, userData }),
  loginFail: errorMessage => ({ type: Types.LoginFail, errorMessage }),
  // logout
  logoutRequst: data => ({ type: Types.LogoutRequest }),
  logoutSuccess: message => ({ type: Types.LogoutSuccess, message }),
  // profile
  editProfile: profileData => ({ type: Types.EditProfile, profileData }),
  editSuccess: userProfile => ({ type: Types.EditSuccess, userProfile }),
  editFail: errorMessage => ({ type: Types.EditFail, errorMessage }),
  editProfileImg: formData => ({ type: Types.EditProfileImg, formData }),
  editProfileImgSuccess: uploadedPathList => ({
    type: Types.EditProfileImgSuccess,
    uploadedPathList
  })
};

const INITIAL_STATE = {
  authenticated: null,
  logoutToken: null,
  // data
  errorMessage: null,
  userData: {
    userIndex: null,
    email: null,
    name: null,
    phone: null,
    address: null,
    position: null,
    profileImage: null,
    companyIndex: 0,
    companyName: null,
    workApplicantStatus: 'UNKNOWN',
    companyApplicantStatus: 'UNKNOWN'
  },
  userProfile: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SignFail]: (state, action) => (state.authenticated = false),
  [Types.SignSuccess]: (state, action) => (state.signSuccess = action.message),
  [Types.LoginSuccess]: (state, action) => {
    state.userData = action.userData;
    state.userProfile = action.userData;
    state.authenticated = true;
  },
  [Types.LoginFail]: (state, action) => {
    state.errorMessage = action.errorMessage;
    state.authenticated = false;
  },
  [Types.LogoutSuccess]: (state, action) =>
    (state.logoutToken = action.message),
  [Types.EditSuccess]: (state, action) =>
    (state.userProfile = action.userProfile)
});

export default reducer;
