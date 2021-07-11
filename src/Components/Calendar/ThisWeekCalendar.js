import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddEvent from '../Event';
import functionWeek from '../../Hooks/addThisWeek';

const ThisWeekCalendar = ({
  schedulePlan,
  enter,
  sendSchedule,
  onChange,
  event
}) => {
  // 기존 달력 날짜
  const thisWeekDate = functionWeek();
  return (
    <>
      {thisWeekDate.map((day, index) => (
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

const PlanDate = ({ day, schedulePlan, sendSchedule, onChange, event }) => {
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
          <PlanArticle
            title="근무"
            startTime="오전 8 : 30"
            endTime="오후 5 : 30"
          />
        )}
      </PlanList>
      <AddEvent
        view={view}
        event={event}
        onChange={onChange}
        sendSchedule={sendSchedule}
        // date={date}
      />
    </WeekArticle>
  );
};
const WeekArticle = styled.div`
  padding: 20px 0;
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

export default ThisWeekCalendar;
