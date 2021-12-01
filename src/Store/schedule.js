import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleStatus:'schedule/ScheduleStatus',
  ScheduleWeeklyRequest: 'schedule/ScheduleWeeklyRequest',
  ScheduleWeeklySuccess: 'schedule/ScheduleWeeklySuccess',
  ScheduleMonthlyRequest: 'schedule/ScheduleMontlyRequest',
  ScheduleMonthlySuccess: 'schedule/ScheduleMonthlySuccess',
  AddSchedule: 'schedule/Addschedule',
  ScheduleEnter: 'schedule/ScheduleEnter',
  ScheduleEnterSuccess: 'schedule/ScheduleEnterSuccess',
  ScheduleEnd: 'schedule/ScheduleEnd',
  ScheduleEndSuccess: 'schedule/ScheduleEndSuccess'
};

export const actions = {
  scheduleStatus: (status)=>({type:Types.ScheduleStatus, status}),
  // 주간 일정
  scheduleWeeklyRequest: index => ({
    type: Types.ScheduleWeeklyRequest,
    index
  }),
  scheduleWeeklySuccess: scheduleData => ({
    type: Types.ScheduleWeeklySuccess,
    scheduleData
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
  // 일정 추가 
  addSchedule: schedule=> ({type: Types.AddSchedule, schedule}),
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
  scheduleStatus: null
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleStatus]: (state, action) => 
    (state.scheduleStatus='Success'),
  [Types.ScheduleWeeklySuccess]: (state, action) => {
    state.date = action.scheduleData;
    state.scheduleStatus = null;
  },
  [Types.ScheduleMonthlySuccess]: (state, action) => {
    state.scheduleMonthly = action.scheduleMonthly;
    state.scheduleStatus = null;
  },
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.enter),
  [Types.ScheduleEndSuccess]: (state, action) =>
    (state.date.scheduleInfo = action.end),
});

export default reducer;
