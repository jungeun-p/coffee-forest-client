import { createReducer } from '../Hooks/redux-helper';

export const Types = {
  ScheduleInfo: 'schedule/ScheduleInfo',
  ScheduleEnter: 'schedule/ScheduleEnter',
  ScheduleEnterSuccess: 'schedule/ScheduleEnterSuccess',
  ScheduleEnd: 'schedule/ScheduleEnd',
  ScheduleEndSuccess: 'schedule/ScheduleEndSuccess'
};

export const actions = {
  scheduleInfo: scheduleData => ({ type: Types.ScheduleInfo, scheduleData }),
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
  date: {}
};

const reducer = createReducer(INITIAL_STATE, {
  [Types.ScheduleInfo]: (state, action) => (state.date = action.scheduleData),
  [Types.ScheduleEnterSuccess]: (state, action) =>
    (state.date.enter = action.attendance),
  [Types.ScheduleEndSuccess]: (state, action) =>
    (state.date.enter = action.attendance)
});

export default reducer;
