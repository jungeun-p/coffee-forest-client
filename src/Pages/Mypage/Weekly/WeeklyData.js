import React from 'react';
import styled from 'styled-components';

const WeeklyData = ({ weekend }) => {
  return (
    <>
      <MainDate>
        <Month>
          <div>{weekend.month} 월</div>
        </Month>
        <Dates>
          <Year>
            <div>{weekend.year} 년</div>
          </Year>
          <WeekendNumber>
            <div>{`${weekend.month}. ${weekend.weekStartDate} ~ ${weekend.month}. ${weekend.weekEndDate}`}</div>
          </WeekendNumber>
        </Dates>
      </MainDate>
      <MainProfile>
        <div>{weekend.name}</div>
        <div>{weekend.position}</div>
      </MainProfile>
    </>
  );
};

const MainDate = styled.div``;
const Month = styled.div``;
const Dates = styled.div``;
const Year = styled.div``;
const WeekendNumber = styled.div``;
const MainProfile = styled.div``;

export default WeeklyData;
