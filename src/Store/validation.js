import { createReducer } from '../Hooks/redux-helper';
// import { createReducer } from '@reduxjs/toolkit';

export const Types = {
  ValidateNumber: 'user/ValidateNumber',
  ValidateEmail: 'user/ValidateEmaiil',
  ValidateSuccessNumber: 'user/ValidateSuccessNumber',
  ValidateSuccessEmail: 'user/ValidateSuccessEmail',
  ValidateFail: 'user/ValidateFail'
};

export const actions = {
  // validation
  validateNumber: input => ({ type: Types.ValidateNumber, input }),
  validateEmail: inputEmail => ({ type: Types.ValidateEmail, inputEmail }),
  validateSuccessNumber: message => ({
    type: Types.ValidateSuccessNumber,
    message
  }),
  validateSuccessEmail: message => ({
    type: Types.ValidateSuccessEmail,
    message
  }),
  validateFail: message => ({ type: Types.ValidateFail, message })
};

const INITIAL_STATE = {
  validFail: '',
  // 비교 후 성공하면 message가 생성.
  validNumber: '',
  validEmail: ''
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ValidateSuccessNumber]: (state, action) =>
    (state.validNumber = action.message),
  [Types.ValidateSuccessEmail]: (state, action) =>
    (state.validEmail = action.message),
  [Types.ValidateFail]: (state, action) => (state.validFail = action.message)
});

export default reducer;
