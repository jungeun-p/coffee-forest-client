import { createReducer } from '../Hooks/redux-helper';
// import { createReducer } from '@reduxjs/toolkit';

export const Types = {
  SignRequest: 'user/SignRequest',
  SignSuccess: 'user/SignSuccess',
  SignFail: 'user/SignFail',
  LoginRequest: 'user/LoginRequest',
  LoginSuccess: 'user/LoginSuccess',
  LoginFail: 'user/LoginFail',
  EditProfile: 'user/EditProfile',
  EditSuccess: 'user/EditSuccess',
  EditFail: 'user/EditFail'
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
  // profile
  editProfile: profileData => ({ type: Types.EditProfile, profileData }),
  editSuccess: userProfile => ({ type: Types.EditSuccess, userProfile }),
  editFail: errorMessage => ({ type: Types.EditFail, errorMessage })
};

const INITIAL_STATE = {
  // signLoading: false,
  signFail: null,
  signSuccess: null,
  // loginFail: null,
  authenticated: false,
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
    userTokenInfo: {
      userIndex: null,
      accessToken: null,
      refreshToken: null
    },
    companyIndex: 0,
    companyName: null,
    workApplicantStatus: 'UNKNOWN',
    companyApplicantStatus: 'UNKNOWN'
  },
  userProfile: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SignFail]: (state, action) => (state.signFail = action.errorMessage),
  [Types.SignSuccess]: (state, action) => (state.signSuccess = action.message),
  [Types.LoginSuccess]: (state, action) => (
    (state.userData = action.userData), (state.userProfile = action.userData)
  ),
  [Types.LoginFail]: (state, action) =>
    (state.errorMessage = action.errorMessage),
  [Types.EditSuccess]: (state, action) =>
    (state.userProfile = action.userProfile)
});

export default reducer;
