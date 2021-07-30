import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ApplicantList: 'admin/ApplicantList',
  ApplicantListSuccess: 'admin/ApplicantListSuccess',
  ApplicantDetail: 'admin/ApplicantDetail',
  ApplicantDetailSuccess: 'admin/ApplicantDetailSuccess'
};

export const actions = {
  applicantList: () => ({ type: Types.ApplicantList }),
  applicationListSuccess: dataList => ({
    type: Types.ApplicantListSuccess,
    dataList
  }),
  applicantDetail: index => ({ type: Types.ApplicantDetail, index }),
  ApplicantDetailSuccess: dataDetail => ({
    type: Types.ApplicantDetailSuccess,
    dataDetail
  })
};

const INITIAL_STATE = {
  dataList: null,
  dataDetail: null
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.ApplicantListSuccess]: (state, action) =>
    (state.dataList = action.dataList),
  [Types.ApplicantDetailSuccess]: (state, action) =>
    (state.dataDetail = action.dataDetail)
});

export default reducer;
