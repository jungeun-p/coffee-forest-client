import React from 'react';
import { useSelector } from 'react-redux';
import WorkPlanList from '../../../Pages/Mypage/Monthly/Plan/WorkPlanList';

const LoadMonthlyPlan = () => {
  const { scheduleMonthly } = useSelector(state => state.schedule);
  return <WorkPlanList scheduleMonthly={scheduleMonthly} />;
};

export default LoadMonthlyPlan;
