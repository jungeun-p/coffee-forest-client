import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  RequestCompany: 'company/RequestCompany',
  RequestSuccess: 'company/RequestSuccess',
  RequestFail: 'company/RequestFail',
  UpdateCompany: 'company/UpdateCompany',
  UpdateSuccess: 'company/UpdateSuccess',
  UpdateFail: 'company/UpdateFail'
};

export const actions = {
  requestCompany: companyIndex => ({
    type: Types.RequestCompany,
    companyIndex
  }),
  requestSuccess: companyEnvironment => ({
    type: Types.RequestSuccess,
    companyEnvironment
  }),
  updateCompany: companySetting => ({
    type: Types.UpdateCompany,
    companySetting
  }),
  updateSuccess: companyEnvironment => ({
    type: Types.UpdateSuccess,
    companyEnvironment
  })
};

const INITIAL_STATE = {
  companyEnvironment: null
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.RequestSuccess]: (state, action) =>
    (state.companyEnvironment = action.companyEnvironment),
  [Types.UpdateSuccess]: (state, action) =>
    (state.companyEnvironment = action.companyEnvironment)
});

export default reducer;
