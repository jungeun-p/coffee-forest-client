import { createReducer } from '../Hooks/redux-helper';
// import { createReducer } from '@reduxjs/toolkit';

export const Types = {
  SignRequest: 'user/SignRequest',
  SignSuccess: 'user/SignSuccess',
  SignFail: 'user/SignFail',
  LoginRequest: 'user/LoginRequest',
  LoginSuccess: 'user/LoginSuccess',
  LoginFail: 'user/LoginFail'
};

export const actions = {
  // sign
  signRequest: data => ({ type: Types.SignRequest, data }),
  signSuccess: message => ({ type: Types.SignSuccess, message }),
  signFail: errorMessage => ({ type: Types.SignFail, errorMessage }),
  // login
  loginRequest: data => ({ type: Types.LoginRequest, data }),
  loginSuccess: userTokenInfo => ({ type: Types.LoginSuccess, userTokenInfo }),
  loginFail: error => ({ type: Types.LoginFail, error })
};

const INITIAL_STATE = {
  // signLoading: false,
  signFail: null,
  signSuccess: null,
  loginFail: '',
  authenticated: false,
  companyIndex: null,
  userTokenInfo: {
    userIndex: null,
    accessToken: null,
    refreshToken: null
  }
  // companyIndex: ''
  // userIndex: '',
  // userInfo: {}
};

const reducer = createReducer(INITIAL_STATE, {
  // [Types.SignFail]: (state, action) => {
  //   if (action.errorMessage === 'Email Already Registered') {
  //     state.signFailEmail = false;
  //   } else if (action.errorMessage === 'Invalid Password Format') {
  //     state.signFailPw = false;
  //   }
  // },
  // [Types.SignFailEmail]: (state, action) =>
  //   (state.signFailEmail = action.message),
  // [Types.SignFailPw]: (state, action) => (state.signFailPw = action.message),
  [Types.SignFail]: (state, action) => (state.signFail = action.errorMessage),
  [Types.SignSuccess]: (state, action) => (state.signSuccess = action.message),
  // [Types.SignFail]: (state, action) => (state.signFail = action.errorMessage),
  [Types.LoginSuccess]: (state, action) =>
    (state.userTokenInfo = action.userTokenInfo),
  [Types.LoginFail]: (state, action) => (state.loginFail = action.error)
});

export default reducer;
