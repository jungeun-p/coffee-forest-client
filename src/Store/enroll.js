import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  EnrollRequestCompany: 'enroll/EnrollRequestCompany',
  EnrollSuccess: 'enroll/EnrollSuccess',
  EnrollFail: 'enroll/EnrollFail',
  EnrollCompanyList: 'enroll/EnrollCompanyList',
  CompnayListSuccess: 'enroll/CompanyListSuccess',
  EnrollRequestEmployee: 'enroll/EnrollRequestEmployee'
};

export const actions = {
  enrollRequestCompany: data => ({ type: Types.EnrollRequestCompany, data }),
  enrollSuccess: office => ({ type: Types.EnrollSuccess, office }),
  enrollFail: errorMessage => ({ type: Types.EnrollFail, errorMessage }),
  enrollCompanyList: () => ({ type: Types.EnrollCompanyList }),
  compnayListSuccess: companyList => ({
    type: Types.CompnayListSuccess,
    companyList
  }),
  enrollRequestEmployee: data => ({ type: Types.EnrollRequestEmployee, data })
};

const INITIAL_STATE = {
  enrollData: {
    companyApplicantStatus: null,
    workStatus: null
  },
  enrollCompany: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.EnrollSuccess]: (state, action) =>
    (state.enrollData = action.enrollData),
  [Types.EnrollFail]: (state, action) =>
    (state.enrollData.companyApplicantStatus = action.errorMessage),
  [Types.CompnayListSuccess]: (state, action) =>
    (state.enrollCompany = action.companyList)
});

export default reducer;
