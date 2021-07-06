import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AddEvent from '../Event';
// import { ButtonCommonS } from '../Button';

// 일일 스케줄
const WeekendList = ({
  date,
  title,
  startTime,
  endTime,
  sendSchedule,
  onChange,
  event
}) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  return (
    <WeekendArticle>
      <PlanInfo>
        <div className="date">{date}</div>
        <div className="event" onClick={onView}>
          ✏️
        </div>
      </PlanInfo>
      <PlanList>
        <PlanArticle title={title} startTime={startTime} endTime={endTime} />
      </PlanList>
      <AddEvent
        view={view}
        event={event}
        onChange={onChange}
        sendSchedule={sendSchedule}
        date={date}
      />
    </WeekendArticle>
  );
};

const WeekendArticle = styled.div`
  padding: 20px 0;
  border-bottom: 1px solid #f3f3f3;
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .date {
    font-size: 14px;
    font-weight: 600;
    line-height: 19px;
    color: #232323;
  }
  .event {
    color: #1ca953;
    font-weight: 600;
    font-size: 18px;
    line-height: 17px;
    cursor: pointer;
  }
`;
const PlanList = styled.div``;

// 각 스케줄 및 시간
const PlanArticle = ({ title, startTime, endTime }) => {
  return (
    <PlanOne>
      <PlanTitleBox>
        <div className="title">{title}</div>
      </PlanTitleBox>
      <PlanTime>
        {startTime} ~ {endTime}
      </PlanTime>
    </PlanOne>
  );
};

const PlanOne = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;
const PlanTitleBox = styled.div`
  width: 37px;
  height: 22px;
  background: #f8faed;
  border-radius: 5px;
  margin-right: 35px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
    color: #d9dbce;
  }
`;
const PlanTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #232323;
`;

export default WeekendList;
