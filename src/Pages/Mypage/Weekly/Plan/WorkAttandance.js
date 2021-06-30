import React from 'react';

const WorkAttandance = ({ schedulePlan, enter }) => {
  const value = schedulePlan[Object.values(schedulePlan)[0]];
  const startTime = Object.values(schedulePlan)[0][0].startTime;
  const endTime = Object.values(schedulePlan)[0][0].endTime;
  return (
    <div>
      <p>
        출근 시간 : {enter?.startTime || '5:30'} {startTime}
      </p>
      <p>퇴근 시간 : </p>
    </div>
  );
};

export default WorkAttandance;
