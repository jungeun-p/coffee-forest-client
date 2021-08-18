import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  // 신청 사원 리스트 및 수락
  RequestList: 'employee/RequestList',
  RequestListSuccess: 'employee/RequestListSuccess',
  RequestListFail: 'employee/RequestListFail',
  AcceptEmployee: 'employee/AcceptEmployee',
  AcceptSuccess: 'employee/AcceptSuccess',
  AcceptFail: 'employee/AcceptFail',
  // 기존 사원 출력 및 수정
  ListEmployee: 'employee/ListEmployee',
  ListEmployeeSuccess: 'employee/ListEmployeeSuccess',
  ListEmployeeFail: 'employee/ListEmployeeFail',
  UpdateEmployee: 'employee/UpdateEmployee',
  UpdateEmployeeSuccess: 'employee/UpdateEmployeeSuccess',
  UpdateEmployeeFail: 'employee/UpdateEmployeeFail'
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
  accpetFail: errorMessage => ({ type: Types.AcceptFail, errorMessage }),
  listEmployee: index => ({ type: Types.ListEmployee, index }),
  listEmployeeSuccess: employeeList => ({
    type: Types.ListEmployeeSuccess,
    employeeList
  }),
  updateEmployee: employeeData => ({
    type: Types.UpdateEmployee,
    employeeData
  }),
  updateEmployeeSuccess: employeeInfo => ({
    type: Types.UpdateEmployeeSuccess,
    employeeInfo
  })
};

const INITIAL_STATE = {
  requestList: null,
  accpetStatus: null,
  employeeList: null,
  employeeStatus: null,
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.RequestListSuccess]: (state, action) =>
    (state.requestList = action.requestList),
  [Types.RequestListFail]: (state, action) =>
    (state.errorMesage = action.errorMessage),
  [Types.AcceptSuccess]: (state, action) => (state.accpetStatus = 'success'),
  [Types.AcceptFail]: (state, action) =>
    (state.errorMessage = action.errorStatus),
  [Types.ListEmployeeSuccess]: (state, action) =>
    (state.employeeList = action.employeeList),
  [Types.UpdateEmployeeSuccess]: (state, action) =>
    (state.employeeStatus = action.employeeInfo)
});

export default reducer;
