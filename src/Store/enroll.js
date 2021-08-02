import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  EnrollRequestCompany: 'enroll/EnrollRequestCompany',
  EnrollRequestEmployee: 'enroll/EnrollRequestEmployee',
  EnrollSuccessCompany: 'enroll/EnrollSuccessCompany',
  EnrollSuccessEmployee: 'enroll/EnrollSuccessEmployee',
  EnrollFail: 'enroll/EnrollFail',
  EnrollCompanyList: 'enroll/EnrollCompanyList',
  CompnayListSuccess: 'enroll/CompanyListSuccess'
};

export const actions = {
  enrollRequestCompany: data => ({ type: Types.EnrollRequestCompany, data }),
  enrollRequestEmployee: data => ({ type: Types.EnrollRequestEmployee, data }),
  enrollSuccessCompany: enrollCompany => ({
    type: Types.EnrollSuccessCompany,
    enrollCompany
  }),
  enrollSuccessEmployee: enrollEmployee => ({
    type: Types.EnrollSuccessEmployee,
    enrollEmployee
  }),
  enrollFail: errorMessage => ({ type: Types.EnrollFail, errorMessage }),
  enrollCompanyList: () => ({ type: Types.EnrollCompanyList }),
  compnayListSuccess: companyList => ({
    type: Types.CompnayListSuccess,
    companyList
  })
};

const INITIAL_STATE = {
  enrollCompany: {
    userIndex: null,
    name: null,
    address: null,
    businessNumber: null,
    companyApplicantStatus: null
  },
  enrollEmployee: {
    companyIndex: null,
    userIndex: null,
    workStatus: null
  },
  companyList: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.EnrollSuccessCompany]: (state, action) =>
    (state.enrollCompany = action.enrollCompany),
  [Types.EnrollSuccessEmployee]: (state, action) =>
    (state.enrollEmployee = action.enrollEmployee),
  [Types.EnrollFail]: (state, action) =>
    (state.enrollCompany.companyApplicantStatus = action.errorMessage),
  [Types.CompnayListSuccess]: (state, action) =>
    (state.companyList = action.companyList)
});

export default reducer;
