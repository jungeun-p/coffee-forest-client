import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  RequestList: 'employee/RequestList',
  RequestListSuccess: 'employee/RequestListSuccess',
  RequestListFail: 'employee/RequestListFail'
};

export const actions = {
  requestList: index => ({ type: Types.RequestList, index }),
  requestListSuccess: requestList => ({
    type: Types.RequestListSuccess,
    requestList
  }),
  requestListFail: errorMessage => ({
    type: Types.RequestListFail,
    errorMessage
  })
};

const INITIAL_STATE = {
  requestList: null,
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.RequestListSuccess]: (state, action) =>
    (state.requestList = action.requestList),
  [Types.RequestListFail]: (state, action) =>
    (state.errorMesage = action.errorMessage)
});

export default reducer;
