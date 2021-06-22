import React from 'react';
import styled from 'styled-components';

const WorkMypage = ({ weekend }) => {
  return (
    <MainProfile>
      <div>{weekend.name}</div>
      <div>{weekend.position}</div>
    </MainProfile>
  );
};

const MainProfile = styled.div``;

export default WorkMypage;
