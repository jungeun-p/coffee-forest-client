import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddEvent from '../Event';
import functionWeek from '../../Hooks/addThisWeek';

const ThisWeekCalendar = ({ weekend, sendSchedule, onChange, event }) => {
  // 기존 달력 날짜
  const thisWeekDate = functionWeek();
  const schedulePlan = weekend?.scheduleInfo;
  return (
    <>
      {schedulePlan &&
        thisWeekDate.map((day, index) => (
          <PlanDate
            day={day}
            key={index}
            schedulePlan={schedulePlan[day]}
            sendSchedule={sendSchedule}
            onChange={onChange}
            event={event}
          />
        ))}
    </>
  );
};

const PlanDate = ({ schedulePlan, day, sendSchedule, onChange, event }) => {
  const [view, setView] = useState(false);
  const onView = () => {
    setView(!view ? true : false);
  };
  useEffect(() => {
    setView(false);
  }, []);
  return (
    <WeekArticle>
      <PlanInfo>
        <div className="date">{`${day.slice(5, 7)}월 ${day.slice(
          8,
          11
        )}일`}</div>
        <div className="event" onClick={onView}>
          ✏️
        </div>
      </PlanInfo>
      <PlanList>
        {schedulePlan ? (
          schedulePlan.map((plan, index) => (
            <PlanArticle
              key={index}
              title={plan.scheduleStatus === 'OUTSIDE' ? '외근' : '근무'}
              startTime={
                plan.startTime.slice(0, 2) > 12
                  ? `오후 ${
                      plan.startTime.slice(0, 2) - 12
                    } : ${plan.startTime.slice(3, 5)}`
                  : `오전 ${plan.startTime.slice(
                      0,
                      2
                    )} : ${plan.startTime.slice(3, 5)}`
              }
              endTime={
                plan.endTime.slice(0, 2) > 12
                  ? `오후 ${
                      plan.endTime.slice(0, 2) - 12
                    } : ${plan.endTime.slice(3, 5)}`
                  : `오전 ${plan.endTime.slice(0, 2)} : ${plan.endTime.slice(
                      3,
                      5
                    )}`
              }
            />
          ))
        ) : (
          <div className="default">일정을 추가해주세요!</div>
        )}
      </PlanList>
      <AddEvent
        view={view}
        event={event}
        onChange={onChange}
        sendSchedule={sendSchedule}
      />
    </WeekArticle>
  );
};
const WeekArticle = styled.div`
  padding: 25px 0;
  border-bottom: 1px solid #f3f3f3;
`;

const PlanInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* padding: 20px 0;
  border-bottom: 1px solid #f3f3f3; */
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
const PlanList = styled.div`
  .default {
    font-size: 12px;
    line-height: 16px;
    color: #d9dbce;
    font-weight: 700;
    margin-top: 10px;
  }
`;

// 각 스케줄 및 시간
const PlanArticle = ({ title, startTime, endTime }) => {
  return (
    <PlanOne>
      <PlanTitleBox title={title}>
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
  width: 35px;
  height: 20px;
  background-color: ${props =>
    props.title === '외근' ? '#5eb1fe' : '#1ca953'};
  border-radius: 5px;
  margin-right: 15px;
  .title {
    text-align: center;
    font-weight: 600;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
  }
`;
const PlanTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #232323;
`;

export default ThisWeekCalendar;
