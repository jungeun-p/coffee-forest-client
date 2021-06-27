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
  signSuccess: userIndex => ({ type: Types.SignSuccess, userIndex }),
  signFail: error => ({ type: Types.SignFail, error }),
  // login
  loginRequest: data => ({ type: Types.LoginRequest, data }),
  loginSuccess: userInfo => ({ type: Types.LoginSuccess, userInfo }),
  loginFail: error => ({ type: Types.LoginFail, error })
};

const INITIAL_STATE = {
  signLoading: false,
  signFail: '',
  loginLoading: false,
  loginFail: '',
  companyIndex: '',
  userIndex: '',
  userInfo: {
    companyIndex: null,
    userIndex: null
  }
};

const reducer = createReducer(INITIAL_STATE, {
  // [Types.SignRequest]: (state, action) => ({}),
  [Types.SignSuccess]: (state, action) => (state.userIndex = action.userIndex),
  [Types.SignFail]: (state, action) => ({
    ...state,
    signLoading: false,
    signFail: action.error
  }),
  [Types.LoginSuccess]: (state, action) => (state.userInfo = action.userInfo),
  [Types.LoginFail]: (state, action) => (state.loginFail = action.error)
});

export default reducer;
