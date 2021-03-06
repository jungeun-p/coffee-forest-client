import React from 'react';
import styled from 'styled-components';
import AddThisMonth from '../../Hooks/addThisMonth';

const ThisMonthCalendar = ({ LoadSchedule }) => {
  return (
    <MonthlyCalendarBox>
      <AddThisMonth LoadSchedule={LoadSchedule} />
    </MonthlyCalendarBox>
  );
};

const MonthlyCalendarBox = styled.div`
  @media all and (min-width: 768px) {
    margin-right: 70px;
    width: 320px;
  }
  margin-bottom: 35px;
  display: flex;
  flex-direction: column;
  .calendar {
    display: flex;
    flex-direction: column;
  }
`;

export default ThisMonthCalendar;
