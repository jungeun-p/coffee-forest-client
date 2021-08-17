import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleInfoRequest: 'schedule/ScheduleInfoRequest',
  ScheduleInfoSuccess: 'schedule/ScheduleInfoSuccess',
  ScheduleInfoFail: 'schedule/ScheduleInfoFail',
  ScheduleMonthlyRequest: 'schedule/ScheduleMontlyRequest',
  ScheduleMonthlySuccess: 'schedule/ScheduleMonthlySuccess',
  ScheduleMonthlyFail: 'schedule/ScheduleMonthlyFail',
  ScheduleEnter: 'schedule/ScheduleEnter',
  ScheduleEnterSuccess: 'schedule/ScheduleEnterSuccess',
  ScheduleEnd: 'schedule/ScheduleEnd',
  ScheduleEndSuccess: 'schedule/ScheduleEndSuccess'
};

export const actions = {
  // 주간 일정
  scheduleInfoRequest: index => ({ type: Types.ScheduleInfoRequest, index }),
  ScheduleInfoSuccess: scheduleData => ({
    type: Types.ScheduleInfoSuccess,
    scheduleData
  }),
  scheduleInfoFail: errorMessage => ({
    type: Types.ScheduleInfoFail,
    errorMessage
  }),
  // 월간 일정
  scheduleMonthlyRequest: index => ({
    type: Types.ScheduleMonthlyRequest,
    index
  }),
  scheduleMonthlySuccess: scheduleMonthly => ({
    type: Types.ScheduleMonthlySuccess,
    scheduleMonthly
  }),
  scheduleMonthlyFail: errorMessage => ({
    type: Types.ScheduleMonthlyFail,
    errorMessage
  }),
  // 출퇴근
  scheduleEnter: index => ({ type: Types.ScheduleEnter, index }),
  scheduleEnterSuccess: enter => ({
    type: Types.ScheduleEnterSuccess,
    enter
  }),
  scheduleEnd: index => ({ type: Types.ScheduleEnd, index }),
  scheduleEndSuccess: end => ({
    type: Types.ScheduleEndSuccess,
    end
  })
};

const INITIAL_STATE = {
  date: {
    userIndex: null,
    userName: null,
    profileImage: null,
    scheduleInfo: {}
  },
  scheduleMonthly: null,
  errorMessage: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleInfoSuccess]: (state, action) =>
    (state.date = action.scheduleData),
  [Types.ScheduleInfoFail]: (state, action) =>
    (state.errorMessage = action.errorMessage),
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.enter),
  [Types.ScheduleEndSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.end),
  [Types.ScheduleMonthlySuccess]: (state, action) =>
    (state.scheduleMonthly = action.scheduleMonthly),
  [Types.ScheduleMonthlyFail]: (state, action) =>
    (state.errorMessage = action.errorMessage)
});

export default reducer;
