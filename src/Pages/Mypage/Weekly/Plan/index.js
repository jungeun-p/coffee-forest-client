import React from 'react';
import SaveWorkPlan from '../../../../System/Mypage/Weekly/SaveWorkPlan';

const WorkPlan = ({ weekend, schedulePlan }) => {
  return <SaveWorkPlan schedulePlan={schedulePlan} weekend={weekend} />;
};

export default WorkPlan;
