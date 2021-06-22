// @ts-ignore
import React from 'react';
import WorkData from './Weekly/Data/WorkData';
import WorkPlan from '../../System/Mypage/Weekly/WorkPlan';

const WeeklyPage = ({ weekend }) => {
  return (
    <>
      <h4>WorkData</h4>
      <WorkData weekend={weekend} />
      <h4>WorkLoad</h4>
      <h4>WorkPaln</h4>
      <WorkPlan weekend={weekend} />
    </>
  );
};

export default WeeklyPage;
