import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  RequestList: 'employee/RequestList',
  RequestListSuccess: 'employee/RequestListSuccess',
  RequestListFail: 'employee/RequestListFail',
  AcceptEmployee: 'employee/AcceptEmployee',
  AcceptSuccess: 'employee/AcceptSuccess',
  AcceptFail: 'employee/AcceptFail'
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
  }),
  acceptEmployee: indexData => ({ type: Types.AcceptEmployee, indexData }),
  acceptSuccess: status => ({ type: Types.AcceptSuccess, status }),
  accpetFail: errorMessage => ({ type: Types.AcceptFail, errorMessage })
};

const INITIAL_STATE = {
  requestList: null,
  accpetStatus: null,
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.RequestListSuccess]: (state, action) =>
    (state.requestList = action.requestList),
  [Types.RequestListFail]: (state, action) =>
    (state.errorMesage = action.errorMessage),
  [Types.AcceptSuccess]: (state, action) =>
    (state.accpetStatus = action.status),
  [Types.AcceptFail]: (state, action) =>
    (state.errorMessage = action.errorStatus)
});

export default reducer;
