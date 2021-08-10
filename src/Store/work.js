const { createReducer } = require('../Hooks/redux-helper');

export const Types = {
  RequestWorkList: 'work/RequestWorkList',
  WorkListSuccess: 'work/WorkListSuccess',
  WorkListError: 'work/WorkListError'
};

export const actions = {
  requestWorkList: workIndex => ({ type: Types.RequestWorkList, workIndex }),
  workListSuccess: workList => ({ type: Types.WorkListSuccess, workList }),
  workListError: errorMessage => ({ type: Types.WorkListError, errorMessage })
};

const INITIAL_STATE = {
  workList: null,
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.WorkListSuccess]: (state, action) =>
    (state.workList = action.workList),
  [Types.WorkListError]: (state, action) =>
    (state.errorMessage = action.errorMessage)
});

export default reducer;
