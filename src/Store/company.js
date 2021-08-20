import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  UpdateCompany: 'company/UpdateCompany',
  UpdateSuccess: 'company/UpdateSuccess',
  UpdateFail: 'company/UpdateFail'
};

export const actions = {
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
  [Types.UpdateSuccess]: (state, action) =>
    (state.companyEnvironment = action.companyEnvironment)
});

export default reducer;
