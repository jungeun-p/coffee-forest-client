import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ApplicantList: 'admin/ApplicantList',
  ApplicantListSuccess: 'admin/ApplicantListSuccess'
};

export const actions = {
  applicantList: () => ({ type: Types.ApplicantList }),
  applicationListSuccess: dataList => ({
    type: Types.ApplicantListSuccess,
    dataList
  })
};

const INITIAL_STATE = {
  dataList: {}
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.ApplicantListSuccess]: (state, action) =>
    (state.dataList = action.dataList)
});

export default reducer;
