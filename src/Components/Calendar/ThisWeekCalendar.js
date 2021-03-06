import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import AddEvent from '../Event';
import AddThisWeek from '../../Hooks/addThisWeek';
import dayjs from 'dayjs';
import TimeBox from '../Event/TimeBox';
import { useSelector } from 'react-redux';

const ThisWeekCalendar = ({ weekend, onChange, event }) => {
  // 기존 달력 날짜
  const thisWeekDate = AddThisWeek();
  const schedulePlan = weekend?.scheduleInfo;
  
  return (
    <>
      {schedulePlan &&
        thisWeekDate.map((day, index) => (
          <PlanDate
          day={day.date}
          key={index}
          schedulePlan={schedulePlan[day.date]}
          onChange={onChange}
          event={event}
          />
          ))}
    </>
  );
};

const PlanDate = ({
  schedulePlan,
  day,
  onChange,
  event,
}) => {
  const [view, setView] = useState(false);
  const { scheduleStatus } = useSelector(state => state.schedule);
  
  const onView = () => {
    setView(!view ? true : false);
  };
  
  useEffect(() => {
    setView(false);
  }, [scheduleStatus]);
  
  const today = dayjs();
  const isToday = today.format('YYYY-MM-DD') === day ? 'today' : '';
  return (
    <WeekArticle>
      <PlanInfo onClick={onView}>
        <div className={`date ${isToday}`}>
          {`${day.slice(5, 7)}월 ${day.slice(8, 11)}일`}
        </div>
        <div className="event">✏️</div>
      </PlanInfo>
      <PlanList>
        {schedulePlan ? (
          schedulePlan.map((plan, index) => (
            <PlanArticle
              key={index}
              title={plan.scheduleType}
              startTime={plan.startTime}
              endTime={plan.endTime}
            />
          ))
        ) : (
          <div className="default">일정을 추가해주세요</div>
        )}
      </PlanList>
      <AddEvent
        view={view}
        day={day}
        event={event}
        onChange={onChange}
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
    color: #858585;
  }
  .today {
    color: #1ca953;
    font-weight: 700;
    text-decoration: underline;
    text-underline-position: under;
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
      <PlanTitleBox
        title={
          title === 'ENTER' || title === 'LEAVE'
            ? '#1ca953'
            : title === 'OUTSIDE'
            ? '#5EB1FE'
            : title === 'CONFERENCE'
            ? '#fedf5e'
            : '#FE5E5E'
        }
      >
        <div className="title">
          {title === 'ENTER' || title === 'LEAVE'
            ? '근무'
            : title === 'OUTSIDE'
            ? '외근'
            : title === 'CONFERENCE'
            ? '회의'
            : '연차'}
        </div>
      </PlanTitleBox>
      <PlanTime>
        <TimeBox time={startTime} />
        <div className="hypen">-</div>
        <TimeBox time={endTime} />
      </PlanTime>
    </PlanOne>
  );
};

const PlanOne = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;
const PlanTitleBox = styled.div`
  width: 35px;
  height: 20px;
  background-color: ${props => props.title};
  border-radius: 5px;
  margin-right: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  .title {
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;
  }
`;
const PlanTime = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #232323;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  .hypen {
    font-size: 15px;
    margin: 10px 5px 0 5px;
  }
`;

export default ThisWeekCalendar;
