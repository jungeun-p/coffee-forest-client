import React from 'react';
import styled from 'styled-components';
import WorkDateInfo from './WorkDateInfo';
import WorkMypage from './WorkMypage';

const WorkData = ({ weekend }) => {
  return (
    <WorkDataWrapper>
      <WorkDateInfo />
      <WorkMypage />
    </WorkDataWrapper>
  );
};

const WorkDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 35px;
`;

export default WorkData;
