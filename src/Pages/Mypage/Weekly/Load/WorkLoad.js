import React from 'react';
import styled from 'styled-components';

const WorkLoad = () => {
  return <WorkLoadBox>이번 주 업무량</WorkLoadBox>;
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
