import React from 'react';
import SaveSchedule from '../../../../System/Mypage/Weekly/SaveSchedule';

const WorkPlan = ({ weekend, schedulePlan }) => {
  return <SaveSchedule schedulePlan={schedulePlan} weekend={weekend} />;
};

export default WorkPlan;
