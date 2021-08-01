import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  EnrollRequest: 'enroll/EnrollRequest',
  EnrollSuccess: 'enroll/EnrollSuccess',
  EnrollFail: 'enroll/EnrollFail',
  EnrollCompanyList: 'enroll/EnrollCompanyList',
  CompnayListSuccess: 'enroll/CompanyListSuccess'
};

export const actions = {
  enrollRequest: data => ({ type: Types.EnrollRequest, data }),
  enrollSuccess: office => ({ type: Types.EnrollSuccess, office }),
  enrollFail: errorMessage => ({ type: Types.EnrollFail, errorMessage }),
  enrollCompanyList: () => ({ type: Types.EnrollCompanyList }),
  compnayListSuccess: companyList => ({
    type: Types.CompnayListSuccess,
    companyList
  })
};

const INITIAL_STATE = {
  enrollData: {
    userIndex: '',
    name: '',
    address: '',
    businessNumber: '',
    companyApplicantStatus: null
  },
  enrollCompany: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.EnrollSuccess]: (state, action) => (state.enrollData = action.office),
  [Types.EnrollFail]: (state, action) =>
    (state.enrollData.companyApplicantStatus = action.errorMessage),
  [Types.CompnayListSuccess]: (state, action) =>
    (state.enrollCompany = action.companyList)
});

export default reducer;
