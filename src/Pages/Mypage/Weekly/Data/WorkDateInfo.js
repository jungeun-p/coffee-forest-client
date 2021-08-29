import React from 'react';
import styled from 'styled-components';
import AddThisWeek from '../../../../Hooks/addThisWeek';
import dayjs from 'dayjs';

const WorkDateInfo = () => {
  const thisWeekDate = AddThisWeek();
  const now = dayjs();
  const thisYear = now.year();
  const thisMonth = now.month() + 1;
  const thisDateStart = thisWeekDate[0].date;
  const thisDateLast = thisWeekDate[4].date;
  return (
    <MainDate>
      <Month>
        <div>{thisMonth < 10 ? '0' + thisMonth : thisMonth} 월</div>
      </Month>
      <DividedBar />
      <Dates>
        <Year>
          <div>{thisYear} 년</div>
        </Year>
        <WeekendNumber>
          <div>{`${thisDateStart.slice(5, 7)}. ${thisDateStart.slice(
            8,
            11
          )} ~ ${thisDateLast.slice(5, 7)}. ${thisDateLast.slice(8, 11)}`}</div>
        </WeekendNumber>
      </Dates>
    </MainDate>
  );
};

const MainDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Month = styled.div`
  font-size: 24px;
  color: #1ca953;
  font-weight: 800;
  letter-spacing: -0.14px;
  line-height: 12px;
`;

const DividedBar = styled.div`
  height: 22px;
  margin: 0 12px;
  border: 0.2px solid #d9dbce;
`;
const Dates = styled.div`
  font-size: 10px;
  color: #d9dbce;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: 12px;
`;
const Year = styled.div``;
const WeekendNumber = styled.div``;

export default WorkDateInfo;
