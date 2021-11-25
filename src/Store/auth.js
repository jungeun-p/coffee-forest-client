import { createReducer } from '../Hooks/redux-helper';

const Types = {
  GetAccessSuccess: 'auth/GetAccessSuccess',
  GetAccessFail: 'auth/GetAccessFail'
};

export const actions = {
  getAccessSuccess: () => ({ type: Types.GetAccessSuccess }),
  getAccessFail: errorMessage => ({ type: Types.GetAccessFail, errorMessage })
};

const INITIAL_STATE = {
  status: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.GetAccessSuccess]: state => (state.status = true),
  [Types.GetAccessFail]: (state, action) => (state.status = action.errorMessage)
});

export default reducer;
