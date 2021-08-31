import React from 'react';
import { useSelector } from 'react-redux';
import WorkPlanList from '../../../Pages/Mypage/Monthly/Plan/WorkPlanList';

const LoadMonthlyPlan = () => {
  const { scheduleMonthly } = useSelector(state => state.schedule);
  console.log(scheduleMonthly);
  return <WorkPlanList scheduleMonthly={scheduleMonthly} />;
};

export default LoadMonthlyPlan;
