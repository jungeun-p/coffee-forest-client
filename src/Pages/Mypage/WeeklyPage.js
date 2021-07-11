// @ts-ignore
import React from 'react';
import WorkData from './Weekly/Data/WorkData';
import WorkLoad from './Weekly/Load/WorkLoad';
import WorkPlan from './Weekly/Plan';

const WeeklyPage = ({ weekend, schedulePlan }) => {
  return (
    <>
      <WorkData weekend={weekend} />
      <WorkLoad schedulePlan={schedulePlan} weekend={weekend} />
      <WorkPlan schedulePlan={schedulePlan} weekend={weekend} />
    </>
  );
};

export default WeeklyPage;
