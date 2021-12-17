import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ApplicantList: 'admin/ApplicantList',
  ApplicantListSuccess: 'admin/ApplicantListSuccess',
  ApplicantDetail: 'admin/ApplicantDetail',
  ApplicantDetailSuccess: 'admin/ApplicantDetailSuccess',
  AcceptCompany: 'admin/AcceptCompany',
  AcceptSuccess: 'admin/AcceptSuccess'
};

export const actions = {
  applicantList: () => ({ type: Types.ApplicantList }),
  applicationListSuccess: data => ({
    type: Types.ApplicantListSuccess,
    data
  }),
  applicantDetail: index => ({ type: Types.ApplicantDetail, index }),
  applicantDetailSuccess: dataDetail => ({
    type: Types.ApplicantDetailSuccess,
    dataDetail
  }),
  acceptCompany: acceptForm => ({ type: Types.AcceptCompany, acceptForm }),
  accpetSuccess: acceptRes => ({ type: Types.AcceptSuccess, acceptRes })
};

const INITIAL_STATE = {
  dataList: null,
  dataDetail: null,
  accpet: null
};
const reducer = createReducer(INITIAL_STATE, {
  [Types.ApplicantListSuccess]: (state, action) =>
    (state.dataList = action.data),
  [Types.ApplicantDetailSuccess]: (state, action) =>
    (state.dataDetail = action.dataDetail),
  [Types.AcceptSuccess]: (state, action) => (state.accept = 'accept')
});

export default reducer;
