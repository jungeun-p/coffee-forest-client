import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  EnrollRequest: 'enroll/EnrollRequest',
  EnrollSuccess: 'enroll/EnrollSuccess',
  EnrollFail: 'enroll/EnrollFail'
};

export const actions = {
  enrollRequest: data => ({ type: Types.EnrollRequest, data }),
  enrollSuccess: office => ({ type: Types.EnrollSuccess, office }),
  enrollFail: errorMessage => ({ type: Types.EnrollFail, errorMessage })
};

const INITIAL_STATE = {
  enrollData: {
    userIndex: '',
    name: '',
    address: '',
    businessNumber: '',
    companyApplicantStatus: null
  }
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.EnrollSuccess]: (state, action) => (state.enrollData = action.office),
  [Types.EnrollFail]: (state, action) =>
    (state.enrollData.companyApplicantStatus = action.errorMessage)
});

export default reducer;
