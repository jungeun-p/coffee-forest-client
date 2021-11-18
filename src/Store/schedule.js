import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleWeeklyRequest: 'schedule/ScheduleWeeklyRequest',
  ScheduleWeeklySuccess: 'schedule/ScheduleWeeklySuccess',
  ScheduleWeeklyFail: 'schedule/ScheduleWeeklyFail',
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
  scheduleWeeklyRequest: index => ({
    type: Types.ScheduleWeeklyRequest,
    index
  }),
  scheduleWeeklySuccess: scheduleData => ({
    type: Types.ScheduleWeeklySuccess,
    scheduleData
  }),
  scheduleWeeklyFail: status => ({
    type: Types.ScheduleWeeklyFail,
    status
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
  scheduleMonthlyFail: status => ({
    type: Types.ScheduleMonthlyFail,
    status
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
  [Types.ScheduleWeeklySuccess]: (state, action) => {
    state.date = action.scheduleData;
    state.errorMessage = null;
  },
  [Types.ScheduleWeeklyFail]: (state, action) =>
    (state.errorMessage = action.status),
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.enter),
  [Types.ScheduleEndSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.end),
  [Types.ScheduleMonthlySuccess]: (state, action) => {
    state.scheduleMonthly = action.scheduleMonthly;
    state.errorMessage = null;
  },
  [Types.ScheduleMonthlyFail]: (state, action) =>
    (state.errorMessage = action.status)
});

export default reducer;
