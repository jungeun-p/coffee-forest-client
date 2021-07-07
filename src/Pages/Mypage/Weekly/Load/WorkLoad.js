import React from 'react';
import styled from 'styled-components';

const WorkLoad = ({ schedulePlan }) => {
  const date = Object.keys(schedulePlan);
  return (
    <WorkLoadBox>
      <div>이번 주 업무량</div>
      {
        <div>
          {date.map(day =>
            schedulePlan[day].map(key => (
              <div>{key.scheduleStatus === 'OUTSIDE' ? '💼' : ''}</div>
            ))
          )}
        </div>
      }
    </WorkLoadBox>
  );
};

const WorkLoadBox = styled.div`
  height: 165px;
  background-color: white;
  background: #ffffff;
  box-shadow: 4px 16px 36px rgba(0, 0, 0, 0.05);
  border-radius: 16px;
  margin-bottom: 35px;
`;

export default WorkLoad;
