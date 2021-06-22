import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  SignRequest: 'user/SignRequest',
  SignSuccess: 'user/SignSuccess',
  SignFail: 'user/SignFail'
};

export const actions = {
  signRequest: data => ({ type: Types.SignRequest, data }),
  signSuccess: token => ({ type: Types.SignSuccess, token }),
  signFail: () => ({ type: Types.SignFail })
};

const INITIAL_STATE = {
  loading: false
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.SignRequest]: (state, action) => ({
    ...state,
    loading: true
  }),
  [Types.SignSuccess]: (state, action) => ({
    ...state,
    loading: false,
    payload: {
      token: action.payload.token
    }
  }),
  [Types.SignFail]: (state, action) => ({
    ...state
  })
});

export default reducer;
