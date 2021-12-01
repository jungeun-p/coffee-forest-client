const { createReducer } = require('../Hooks/redux-helper');

export const Types = {
  RequestWorkList: 'work/RequestWorkList',
  WorkListSuccess: 'work/WorkListSuccess',
  WorkListError: 'work/WorkListError',
  WorkAccept: 'work/WorkAccept',
  WorkAcceptSuccess: 'work/WorkAcceptSuccess',
  WorkReject: 'work/WorkReject',
  WorkRejectSuccess: 'work/WorkRejectSuccess'
};

export const actions = {
  requestWorkList: workIndex => ({ type: Types.RequestWorkList, workIndex }),
  workListSuccess: workList => ({ type: Types.WorkListSuccess, workList }),
  workListError: errorMessage => ({ type: Types.WorkListError, errorMessage }),
  workAccept: indexData => ({
    type: Types.WorkAccept,
    indexData
  }),
  workAcceptSuccess: statusAccept => ({
    type: Types.WorkAcceptSuccess,
    statusAccept
  }),
  workReject: indexData => ({
    type: Types.WorkReject,
    indexData
  }),
  workRejectSuccess: statusReject => ({
    type: Types.WorkRejectSuccess,
    statusReject
  })
};

const INITIAL_STATE = {
  workList: null,
  errorMessage: null,
  workStatus: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.WorkListSuccess]: (state, action) =>
    (state.workList = action.workList),
  [Types.WorkListError]: (state, action) =>
    (state.errorMessage = action.errorMessage),
  [Types.WorkAcceptSuccess]: (state, action) =>
    (state.workStatus = action.statusAccept),
  [Types.WorkRejectSuccess]: (state, action) =>
    (state.workStatus = action.statusReject)
});

export default reducer;
