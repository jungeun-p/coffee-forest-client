import React from 'react';
import { useSelector } from 'react-redux';
import WeeklyPage from '../../Pages/Mypage/WeeklyPage';

const WeeklyPlan = () => {
  const weekend = useSelector(state => state.schedule.date);
  console.log(weekend);
  const schedulePlan = useSelector(state => state.schedule.date.scheduleList);
  // @ts-ignore
  return <WeeklyPage weekend={weekend} schedulePlan={schedulePlan} />;
};

export default WeeklyPlan;
