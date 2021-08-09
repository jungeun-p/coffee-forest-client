import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleInfoRequest: 'schedule/ScheduleInfoRequest',
  ScheduleInfoSuccess: 'schedule/ScheduleInfoSuccess',
  ScheduleInfoFail: 'schedule/ScheduleInfoFail',
  ScheduleEnter: 'schedule/ScheduleEnter',
  ScheduleEnterSuccess: 'schedule/ScheduleEnterSuccess',
  ScheduleEnd: 'schedule/ScheduleEnd',
  ScheduleEndSuccess: 'schedule/ScheduleEndSuccess'
};

export const actions = {
  scheduleInfoRequest: index => ({ type: Types.ScheduleInfoRequest, index }),
  ScheduleInfoSuccess: scheduleData => ({
    type: Types.ScheduleInfoSuccess,
    scheduleData
  }),
  scheduleInfoFail: errorMessage => ({
    type: Types.ScheduleInfoFail,
    errorMessage
  }),
  scheduleEnter: index => ({ type: Types.ScheduleEnter, index }),
  scheduleEnterSuccess: attendance => ({
    type: Types.ScheduleEnterSuccess,
    attendance
  }),
  scheduleEnd: index => ({ type: Types.ScheduleEnd, index }),
  scheduleEndSuccess: attendance => ({
    type: Types.ScheduleEndSuccess,
    attendance
  })
};

const INITIAL_STATE = {
  date: {},
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleInfoSuccess]: (state, action) =>
    (state.date = action.scheduleData),
  [Types.ScheduleInfoFail]: (state, action) =>
    (state.errorMessage = action.errorMessage),
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.enter = action.attendance),
  [Types.ScheduleEndSuccess]: (state, action) =>
    (state.date.enter = action.attendance)
});

export default reducer;
