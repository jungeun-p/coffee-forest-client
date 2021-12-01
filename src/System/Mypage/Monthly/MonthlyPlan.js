import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ThisMonthCalendar from '../../../Components/Calendar/ThisMonthCalendar';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../../Store/schedule';
import dayjs from 'dayjs';
import WorkPlanList from '../../../Pages/Mypage/Monthly/Plan/WorkPlanList';

const MonthlyPlan = () => {
  const dispatch = useDispatch();
  const { scheduleMonthly } = useSelector(state => state.schedule);
  const { status } = useSelector(state => state.auth);
  const now = dayjs();

  const LoadSchedule = useCallback(date => {
    const today = now.format('YYYY-MM-DD');
    if (!date) {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate:today
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    } else {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: date
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    }
  }, []);

  useEffect(() => {
    LoadSchedule();
  }, [status]);

  return (
    <WorkMonthly>
      <ThisMonthCalendar LoadSchedule={LoadSchedule} />
      <WorkPlanList scheduleMonthly={scheduleMonthly} />
    </WorkMonthly>
  );
};

const WorkMonthly = styled.div`
  display: flex;
  flex-direction: column;
  @media all and (min-width: 768px) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

export default MonthlyPlan;
