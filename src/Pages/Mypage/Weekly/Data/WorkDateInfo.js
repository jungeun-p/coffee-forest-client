import React from 'react';
import styled from 'styled-components';

const WorkDateInfo = ({ weekend }) => {
  return (
    <MainDate>
      <Month>
        <div>{weekend.month} 월</div>
      </Month>
      <DividedBar />
      <Dates>
        <Year>
          <div>{weekend.year} 년</div>
        </Year>
        <WeekendNumber>
          <div>{`${weekend.month}. ${weekend.weekStartDate} ~ ${weekend.month}. ${weekend.weekEndDate}`}</div>
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
  letter-spacing: -0.1em;
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
