import React from 'react';
import styled from 'styled-components';
import { ButtonCommonS } from '../../../../Components/Button';
import { ThisWeek } from '../../../../Components/Calendar';
import WorkAttendance from './WorkAttendance';

const WorkPlan = ({
  onAttandacne,
  onLeaving,
  schedulePlan,
  enter,
  sendSchedule,
  onChange,
  event
}) => {
  const currentDay = new Date();
  const currentYear = Number(currentDay.getFullYear());
  const currentMonth = Number(currentDay.getMonth()) + 1;
  const theDate = Number(currentDay.getDate());
  const theDay = Number(currentDay.getDay());
  const lastDate = new Date(currentYear, currentMonth, 0);
  // // 지난 달의 마지막 날
  // console.log(
  //   `${Number(lastDate.getMonth())}월 ${Number(lastDate.getDate())}일`
  // );
  // theDate가 0이 되었을 때,
  // console.log(lastDate);

  // 이번주 출력
  // function makeWeek() {
  //   for (let i = 1; i < 6; i++) {
  //     const week = `${currentMonth}월 ${theDate - theDay + i}일`;
  //     console.log(week);
  //   }
  // }
  // makeWeek();

  function getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }
  //console.log(getMonday(new Date()));

  // function currentMonday() {
  //   // const current = new Date();
  //   // const currentMonth = current.getMonth();
  //   const LastWeek = new Date(2021, currentMonth - 1, 0);
  //   console.log(LastWeek);
  //   const day = LastWeek.getDay();
  //   const date = LastWeek.getDate();
  //   console.log(date, day);
  //   const monday = date - day + (day === 0 ? -6 : 1);
  //   return new Date(LastWeek.setDate(monday));
  // }
  // console.log(currentMonday());

  function ThisWeeks() {
    var value = [];

    var formatDate = function (date) {
      var myMonth = date.getMonth() + 1;
      var myWeekDay = date.getDate();

      var addZero = function (num) {
        if (num < 10) {
          num = '0' + num;
        }
        return num;
      };
      var md = addZero(myMonth) + addZero(myWeekDay);

      return md;
    };

    var now = new Date(2021, 6, 0);
    var nowDayOfWeek = now.getDay();
    var nowDay = now.getDate();
    var nowMonth = now.getMonth();
    var nowYear = now.getFullYear();
    nowYear += nowYear < 2000 ? 1900 : 0;

    var weekStartDate = new Date(nowYear, nowMonth, nowDay - nowDayOfWeek + 1);
    var weekEndDate = new Date(nowYear, nowMonth, nowDay + (5 - nowDayOfWeek));

    value.push(nowYear + formatDate(weekStartDate));
    value.push(nowYear + formatDate(weekEndDate));

    return value;
  }

  const week = ThisWeeks();
  week.map(day => console.log(day));

  const ThisWeek2 = [
    {
      date: '7월 5일'
    },
    {
      date: '7월 6일'
    },
    {
      date: '7월 7일'
    },
    {
      date: '7월 8일'
    },
    {
      date: '7월 9일'
    }
  ];

  return (
    <>
      {/* 이번 주 근무 타이틀 */}
      <WorkPlanWrapper>
        <WorkPlanTitle>이번 주 근무</WorkPlanTitle>
        <ButtonWrapper>
          <ButtonCommonS onClick={onAttandacne} title="출근" />
          <ButtonCommonS onClick={onLeaving} title="퇴근" />
        </ButtonWrapper>
      </WorkPlanWrapper>
      {/* 이번 주 근무 일정 */}
      <WorkPlanList>
        <ThisWeek />
        {ThisWeek2.map((day, index) => (
          <div key={index}>{day.date}</div>
        ))}
        {/* <WorkAttendance
          schedulePlan={schedulePlan}
          enter={enter}
          sendSchedule={sendSchedule}
          onChange={onChange}
          event={event}
        /> */}
      </WorkPlanList>
    </>
  );
};

const WorkPlanWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 35px;
`;
const WorkPlanTitle = styled.div`
  font-size: 18px;
  line-height: 21px;
  color: #1ca953;
  font-weight: 700;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const WorkPlanList = styled.div`
  background-color: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  padding: 0 20px;
  margin-bottom: 40px;
`;

export default WorkPlan;
