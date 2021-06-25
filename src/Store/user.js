import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  SignRequest: 'user/SignRequest',
  SignSuccess: 'user/SignSuccess',
  SignFail: 'user/SignFail',
  ValidateNumber: 'user/ValidateNumber',
  ValidateEmail: 'user/ValidateEmaiil',
  ValidateSuccess: 'user/ValidateSuccess',
  ValidateFail: 'user/ValidateFail'
};

export const actions = {
  // sign
  signRequest: data => ({ type: Types.SignRequest, data }),
  signSuccess: token => ({ type: Types.SignSuccess, token }),
  signFail: error => ({ type: Types.SignFail, error }),
  // valid
  validateNumber: input => ({ type: Types.ValidateNumber, input }),
  validateEmail: input => ({ type: Types.ValidateEmail, input }),
  validateSuccess: message => ({ type: Types.ValidateSuccess, message }),
  validateFail: error => ({ type: Types.ValidateFail })
};

const INITIAL_STATE = {
  signLoading: false,
  signFail: '',
  userIndex: null, // 회원가입 후 userIndex 값을 얻을 경우 성공.
  validFail: '',
  validMessage: null // 비교 후 성공하면 message가 생성.
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SignRequest]: (state, action) => ({
    ...state,
    signLoading: true
  }),
  [Types.SignSuccess]: (state, action) => ({
    ...state,
    signLoading: false,
    userIndex: action.payload
  }),
  [Types.SignFail]: (state, action) => ({
    ...state,
    signLoading: false,
    signFail: action.error
  }),
  [Types.ValidateSuccess]: (state, action) => ({
    ...state,
    validMessage: action.payload
  }),
  [Types.ValidateFail]: (state, action) => ({
    ...state,
    validFail: action.error
  })
});

export default reducer;
