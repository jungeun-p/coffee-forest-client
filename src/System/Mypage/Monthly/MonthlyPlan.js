import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import ThisMonthCalendar from '../../../Components/Calendar/ThisMonthCalendar';
import LoadMonthlyPlan from './LoadMonthlyPlan';
import { useDispatch, useSelector } from 'react-redux';
import { actions as scheduleActions } from '../../../Store/schedule';
import dayjs from 'dayjs';

const MonthlyPlan = () => {
  const dispatch = useDispatch();
  const montly = useSelector(state => state.schedule);
  const { status } = useSelector(state => state.auth);
  const now = dayjs();

  const LoadSchedule = day => {
    const YearMonth = now.format('YYYY-MM');
    const today = now.date();
    if (!day) {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: `${YearMonth}-${today < 10 ? '0' + today : today}`
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    } else {
      const index = {
        userIndex: localStorage.getItem('userIndex'),
        companyIndex: localStorage.getItem('companyIndex'),
        startDate: `${YearMonth}-${day < 10 ? '0' + day : day}`
      };
      dispatch(scheduleActions.scheduleMonthlyRequest(index));
    }
  };

  useEffect(() => {
    LoadSchedule();
  }, [status]);
  return (
    <WorkMonthly>
      <ThisMonthCalendar LoadSchedule={LoadSchedule} />
      <LoadMonthlyPlan />
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
